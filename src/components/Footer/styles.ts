import styled from 'styled-components';

import { 
  FacebookSquare, 
  Twitter,
  Youtube
} from 'styled-icons/boxicons-logos';
import { SocialInstagram } from 'styled-icons/typicons';

export const Container = styled.footer`
  margin: 0 15%;
  z-index: 2;

  font-size: .92vw;

  @media (max-width: 1300px) {
    font-size: 12px;
  }
`;

export const ContentInfo = styled.div`
  max-width: 57.3vw;
`;

export const SocialLinks = styled.div`
  margin-bottom: 1.8vw;

  > a+a {
    margin-left: .9vw;
  }

  > a svg {
    width: 1.9vw;
    min-width: 28px;
    color: var(--gray-200);
  }
`;

export const FacebookSocialIcon = styled(FacebookSquare)`
`;

export const InstagramSocialIcon = styled(SocialInstagram)`
`;

export const TwitterSocialIcon = styled(Twitter)`
`;

export const YoutubeSocialIcon = styled(Youtube)`
`;

export const CopyrightContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1.5rem;

  gap: .8rem;

  color: var(--gray-200);

  > span a {
    color: var(--link);

    &:hover {
      text-decoration: underline;
    }
  }
`;
