import React from 'react';
import { Link } from 'react-router-dom';

import { Container, ErrorContainer } from './styles';

import MenuTop from '../../components/MenuTop';

const NotFound: React.FC = () => {
    return (
			<Container>
				<MenuTop />

				<ErrorContainer>
					<div>
						<h1>Você se perdeu?</h1>

						<p>Infelizmente não localizamos essa página. Você encontra muitos outros títulos na página inicial.</p>

						<Link to="/">Página inicial da Netflix</Link>

						<span>Código de erro <b>NSES-404</b></span>
					</div>
				</ErrorContainer>

				<span>De <b>Perdidos no espaço</b></span>
			</Container>
    );
}

export default NotFound;
