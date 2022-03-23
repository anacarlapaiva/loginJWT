import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { getUser } from '../services/auth.service'
import LoginPage from '../Pages/LoginPage'
import HomePage from '../Pages/HomePage'
import CreateLogin from '../Pages/CreateLogin'

const Router = () => {

  
  const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    if (!getUser()) return <Navigate to="/" />
    return children
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<PrivateRoute><HomePage /></PrivateRoute>} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/create" element={<CreateLogin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router