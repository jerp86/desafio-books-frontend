import React, { useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import Input from '../../components/Input';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  Content,
  Error,
  HeaderContainer,
  HeaderTitle,
  LogoImage,
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [loginError, setLoginError] = useState(false);

  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/home');
      } catch (err) {
        setLoginError(true);
      }
    },
    [history, signIn],
  );

  return (
    <Container>
      <Content>
        <HeaderContainer>
          <LogoImage />
          <HeaderTitle>Books</HeaderTitle>
        </HeaderContainer>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="email" type="email" labelContent="Email" />

          <Input
            name="password"
            type="password"
            labelContent="Senha"
            hasButton="Entrar"
          />
        </Form>

        {loginError && <Error>Email e/ou senha incorretos.</Error>}
      </Content>
    </Container>
  );
};

export default SignIn;
