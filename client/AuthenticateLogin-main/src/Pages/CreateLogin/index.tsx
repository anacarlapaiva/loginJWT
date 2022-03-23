import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, ContentForm, TopContent } from "./styles";
import api from '../../services/api.service'
import { useEffect } from "react";
import { login } from '../../services/auth.service'

// import { FaArrowLeft } from "react-icons/fa";

const CreateLogin = () => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState();
  const [password, setPassword] = useState("");

  useEffect(() => {
    api.post('http://localhost:5000/users', {
      email: email,
      password: password
    })
    .then((response) => setUser(response.data))
    .catch((err) => alert('Erro ao cadastrar' + err))
  }, [email, password])

  const handleOnSubmit = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault()
  }

  return (
    <Container>
      <form onSubmit={handleOnSubmit}>
        <ContentForm>
            <TopContent>
                <Link to="/">Voltar</Link>
            </TopContent>
            <div>
                <h1>Cadastre-se</h1>
            </div>
          <label htmlFor="email">E-mail</label>
          <Input
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Senha</label>
          <Input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            color="#6EA9FA"
            height="50px"
            width="120px"
            type="submit"
            border="1px solid #aaa"
            radius="5px"
          >
            Cadastrar
          </Button>
        </ContentForm>
      </form>
    </Container>
  );
};

export default CreateLogin;


