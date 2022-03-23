import React, { useEffect } from 'react'
import Button from '../Button'
import { Container, Nav, NavItem, NavMenuUl } from './styles'
import { useNavigate } from 'react-router-dom'
import { getUser, logout } from '../../services/auth.service'
import api from '../../services/api.service'

const HeaderNav: React.FC = () => {
    const navigate = useNavigate()

    useEffect(() => {
        api.get("/projects")
            .then(data => console.log(data.data.projects))
    }, [])

    const handleLogout = () => {
        logout()
        navigate("/")
    }

    return (
        <Container>
            <Nav>
                <NavMenuUl>
                    
                    <NavItem>
                    <h2>Hello {getUser().user.name}</h2>
                    </NavItem>
                    <NavItem>
                        <Button
                            type='button'
                            color='#ccc'
                            radius='5px'
                            height='50px'
                            border='none'
                            width='120px'
                            onClick={handleLogout}
                        >
                            Sair
                        </Button>
                    </NavItem>
                </NavMenuUl>
            </Nav>
        </Container>
    )
}

export default HeaderNav