/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from 'react';

import {
  Container,
  ContainerLeft,
  ContainerRight,
  HeaderLeft,
  ContentLeft,
  ButtonCreateCount,
  ContentRight,
  HeaderRight,
  ButtonGroup,
  ButtonLogin,
  ButtonRegister,
} from './styles';

import Logo from '../../assets/logo.png';
import loginIcon from '../../assets/icon-lock.png';
import registerIcon from '../../assets/icon-plus.png';

import api from '../../services/api';

const Home: React.FC = () => {
  interface Ifeature {
    id: number;
    iconPath: string;
    description: string;
    isActive: boolean;
  }

  const [features, setFetures] = useState<Ifeature[]>([]);

  useEffect(() => {
    api.get('/features').then(response => {
      setFetures(response.data);
    });
  }, []);

  return (
    <Container>
      <ContainerLeft>
        <HeaderLeft>
          <img src={Logo} alt="Logo" />
        </HeaderLeft>
        <ContentLeft>
          <strong>
            Ser o próximo trader esportivo é muito
            <strong className="green"> fácil</strong>
          </strong>
          <p>
            Só na ETRADE Inc. você tem acesso ao melhor dashboard de análise de
            mercado esportivo. Melhore seu perfil e obtenha lucros de até 2x
            mais.
          </p>
          <ButtonCreateCount>Crie sua conta grátis</ButtonCreateCount>
        </ContentLeft>
      </ContainerLeft>
      <ContainerRight>
        <HeaderRight>
          <ButtonGroup>
            <ButtonLogin>
              <img src={loginIcon} alt="LOGIN" />
              LOGIN
            </ButtonLogin>
            <ButtonRegister>
              <img src={registerIcon} alt="CADASTRAR" />
              CADASTRAR
            </ButtonRegister>
          </ButtonGroup>
        </HeaderRight>
        <ContentRight>
          <ul>
            {features.map(feature => (
              <li key={feature.id} className={feature.isActive ? 'white' : ''}>
                <img src={feature.iconPath} alt="Icon" />
                <div className="line" />
                <p>{feature.description}</p>
              </li>
            ))}
          </ul>
        </ContentRight>
      </ContainerRight>
    </Container>
  );
};

export default Home;
