import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';
import * as React from 'react';

interface WelcomeEmailProps {
  name: string;
}

export const WelcomeEmail = ({ name }: WelcomeEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Seu E-book está aqui! - Gedeon Monteiro</Preview>
      <Tailwind>
        <Body className="bg-[#f9fafb] my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px] bg-white shadow-sm">
            <Heading className="text-[#04123b] text-[24px] font-bold text-center p-0 my-[30px] mx-0">
              Olá, {name}!
            </Heading>
            <Text className="text-[#04123b] text-[16px] leading-[24px]">
              Agradecemos sua confiança. O trabalho do Gedeon Monteiro é focado em transformar vidas através de uma abordagem profissional e acolhedora.
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#0071fc] rounded-full text-white text-[16px] font-bold no-underline text-center px-8 py-4"
                href={`${process.env.NEXT_PUBLIC_APP_URL}/ebook/ebook-dor-emocional.pdf`}
              >
                Baixar E-book Agora
              </Button>
            </Section>
            <Text className="text-[#666666] text-[14px] leading-[24px] border-t border-solid border-[#eaeaea] pt-4 mt-8 italic">
              Em caso de dúvidas, basta retornar ao nosso site e clicar em qualquer botão de agendamento para falar com o Gedeon via WhatsApp.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeEmail;
