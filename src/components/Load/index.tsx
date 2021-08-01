import React from 'react';

import { Container } from './styles';

import CharLogo from '../../assets/char-logo.png';

const Load: React.FC = () => {
    return (
        <Container>
            <span></span>
            <strong>
                <img src={CharLogo} alt="Netflix Char Logo" />
            </strong>
        </Container>
    );
}

export default Load;
