import React from 'react';
import { FaGithubAlt, FaPlus } from 'react-icons/fa';

import { Container, Form, SubmitButton } from './styles';

export default function Main() {
  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositórios
      </h1>

      <Form>
        <input type="text" />
        <SubmitButton>
          <FaPlus color="#FFF" />
        </SubmitButton>
      </Form>
    </Container>
  );
}
