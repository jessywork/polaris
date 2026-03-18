import Image from "next/image";
import { useTranslations } from "next-intl";

import { ButtonStyled, Card, CardContent, ImageContainer, Page, TextContainer } from "@/styles/Global.styles";

export default function Home() {
  const t = useTranslations('Homepage');

  return (
    <Page>
      <Card>
        <Image
          className=""
          src="/metyis-logo.svg"
          alt="Metyis logo"
          width={200}
          height={20}
          priority
        />
        <CardContent>
          <TextContainer>
            <h1>{t('title')}</h1>
            <span>{t('description')}</span>
          </TextContainer>
          <TextContainer>
            <h2>{t('employeeTitle')}</h2>
            <span>{t('employeeDescription')}</span>
            <ImageContainer>
              <Image
                className=""
                src="/jnin.png"
                alt="Juninho"
                width={400}
                height={20}
              />
            </ImageContainer>
          </TextContainer>
        </CardContent>
        {/* todo: change link to github */}
        <ButtonStyled url="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app">{t('githubButton')}</ButtonStyled>
      </Card>
    </Page>
  );
}
