import React, { useState } from 'react'
import {Layout, Menu} from 'antd'
import Students from './pages/Students'
import Login from './pages/Login'
import EditStudent from './pages/EditStudent'
import { logout } from './auth/auth'
import PrivateRoute from './components/PrivateRoute'
import RoleRoute from './components/RoleRoute'
import Grades from './pages/Grades'
import { BrowserRouter as Router, Routes ,Route, Link  } from 'react-router-dom'
import AddStudent from './pages/AddStudent'
const { Header, Content } = Layout
export default function App() {
  
  return (
    <>
    <Router>
        <Layout>
        <Header style={{color: '#fff'}}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
          >
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/students">Students</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/add-student">Add Student</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item key="5" onClick={logout}>
              Logout
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/grades">Grades</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style= {{padding:'20px', color: '#000'}}>
          <Routes>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/students" element={<PrivateRoute><Students /></PrivateRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/grades" element={<RoleRoute allowedRoles={['Teacher']}><Grades /></RoleRoute>} />
            <Route path="/add-student" element={<AddStudent />} />
            <Route path="/edit-student/:studentId" element={<PrivateRoute><EditStudent /></PrivateRoute>} />
            <Route path="/unauthorized" element={<h1>Unauthorized Access</h1>} />
          </Routes>

        </Content>
      </Layout>
    </Router>
    
    </>
    
  )
}

 
