import React, { useState } from 'react'
import loginImage2 from '../../assets/loginImage2.jpg'
import imageUser from '../../assets/user-interface.svg'
import { Container, FormContainer, FormContent, PhotoLogin } from './styles';
import { useNavigate } from 'react-router-dom'
import { login } from '../../services/auth.service'
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useEffect } from 'react';
import api from '../../services/api.service'

const LoginPage = () => {
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        api.get('http://localhost:5000/users')
            .then((response) => setUser(response.data))
            .catch((err) => console.log("Ocorreu um erro" + err))
    }, [])

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        login(email, password)
            .then(() => navigate("/dashboard"))
            .catch((err) => console.log(err))
    }
    return (
        <Container>
            <FormContent onSubmit={handleOnSubmit}>
                <div className="content_top">
                    <img src={imageUser} alt="icone do usuário" />
                    <h1>Logue com sua conta!</h1>
                </div>
                <FormContainer>
                    <label style={{ marginBottom: '6px', fontWeight: '500' }} htmlFor='email'>Email:</label>
                    <Input
                        name='email'
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label style={{ marginBottom: '6px', fontWeight: '500' }} htmlFor='password'>Senha:</label>
                    <Input
                        name='password'
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                </FormContainer>
                <Button
                    type='submit'
                    color='#6EA9FA'
                    border='1px solid #ccc'
                    width='130px'
                    height='50px'
                    radius='5px'
                >
                    Entrar
                </Button>
                <Link to="/create" style={{ marginTop: '20px' }}>Não possui uma conta? Cadastre-se</Link>
            </FormContent>
            <PhotoLogin>
                <img src={loginImage2} alt="Imagem login" />
            </PhotoLogin>
        </Container>

    )
}


export default LoginPage

