import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;

    > span {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        
        width: 130px;
        height: 130px;

        border-radius: 50%;
        border: 3px solid transparent;
        border-left-color: var(--logo-color);

        animation: spin 1s linear infinite;

        @keyframes spin {
            to {
                transform: rotate(360deg);
            }
        }
    }

    > strong {
        position: fixed;
        top: calc(0);
        right: calc(0);

        > img {
            width: 36px;

            animation: displayCharLogo .2s;

            @keyframes displayCharLogo {
                0% {
                    width: 0;
                }

                100% {
                    width: 36px;
                }
            }
        }
    }

    @media (max-width: 1000px) {
        > span {
            width: 105px;
            height: 105px;

            border-width: 2px;
        }

        > strong img {
            width: 31px;

            @keyframes displayCharLogo {
                0% {
                    width: 0;
                }
            
                100% {
                    width: 31px;
                }
            }
        }
    }
`;
