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
`;

export const ContentInfo = styled.div`
  max-width: 62.5rem;
`;

export const SocialLinks = styled.div`
  margin-bottom: 2rem;

  > a+a {
    margin-left: .95rem;
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
