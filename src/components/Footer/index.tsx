import React from 'react';

import { 
  Container,
  ContentInfo,
  SocialLinks,
  CopyrightContent,
  FacebookSocialIcon,
  InstagramSocialIcon,
  TwitterSocialIcon,
  YoutubeSocialIcon
} from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <ContentInfo>

        <SocialLinks>
          <a href="https://www.facebook.com/netflixbrasil" target="_blank" rel="noreferrer">
            <FacebookSocialIcon />
          </a>

          <a href="https://www.instagram.com/NetflixBrasil" target="_blank" rel="noreferrer">
            <InstagramSocialIcon />
          </a>

          <a href="https://twitter.com/NetflixBrasil" target="_blank" rel="noreferrer">
            <TwitterSocialIcon />
          </a>

          <a href="https://www.youtube.com/user/NetflixBRA" target="_blank" rel="noreferrer">
            <YoutubeSocialIcon />
          </a>
        </SocialLinks>

        <CopyrightContent>
          <span>
            Este é apenas um clone da Netflix feito para desenvolvimento web | 
            &copy; Todos direitos reservados à <a href="https://www.netflix.com/" target="_blank" rel="noreferrer">Netflix</a>
          </span>

          <span>
            Desenvolvido por ♡ <a href="https://github.com/FelipePDS" target="_blank" rel="noreferrer">Felipe</a>
          </span>
        </CopyrightContent>

      </ContentInfo>
    </Container>
  );
}

export default Footer;
