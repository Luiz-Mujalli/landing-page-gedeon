'use server';

import { z } from 'zod';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { Resend } from 'resend';
import WelcomeEmail from '@/src/emails/WelcomeEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

const leadSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
  whatsapp: z.string().regex(/^\(\d{2}\) \d \d{4}-\d{4}$/, 'WhatsApp deve seguir o formato (99) 9 9999-9999'),
});

export type ActionResponse = {
  success: boolean;
  message?: string;
  error?: string | Record<string, string[]>;
};

export async function handleLeadCapture(formData: { name: string; email: string; whatsapp: string }): Promise<ActionResponse> {
  // 1. Validação com Zod
  const validatedFields = leadSchema.safeParse(formData);

  if (!validatedFields.success) {
    return {
      success: false,
      error: validatedFields.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const { name, email, whatsapp } = validatedFields.data;

  // URL base para o e-book com fallback de segurança
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 
                  process.env.NEXT_PUBLIC_URL_SITE || 
                  'https://landing-page-gedeon-i9xuih6l1-luiz-mujallis-projects.vercel.app';
  
  const pdfUrl = `${siteUrl.replace(/\/$/, '')}/ebook/ebook-dor-emocional.pdf`;

  // 2. Gravação no Google Sheets
  try {
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID!, serviceAccountAuth);
    await doc.loadInfo();
    
    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow({
      Nome: name,
      Email: email,
      WhatsApp: whatsapp,
      Data: new Date().toLocaleString('pt-BR'),
    });

    console.log('Lead gravado com sucesso no Google Sheets');
  } catch (error) {
    console.error('Erro ao gravar no Google Sheets:', error);
    // Mesmo se falhar o Sheets, tentamos enviar o e-mail (ou você pode decidir falhar tudo)
  }

  // 3. Disparo de e-mail via Resend
  try {
    const { data, error } = await resend.emails.send({
      from: 'Gedeon Monteiro <suporte@contato.gedeonmonteiro.com.br>', // Altere para seu domínio verificado no Resend
      to: [email],
      subject: 'Seu E-book está aqui! - Gedeon Monteiro',
      react: WelcomeEmail({ name, pdfUrl }),
    });

    if (error) {
      console.error('Erro no Resend:', error);
      return { success: false, error: 'Erro ao enviar e-mail' };
    }

    console.log('E-mail enviado com sucesso via Resend:', data);
  } catch (error) {
    console.error('Erro inesperado no Resend:', error);
    return { success: false, error: 'Erro inesperado no servidor' };
  }

  return { success: true, message: 'Lead capturado e e-mail enviado com sucesso!' };
}
