import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../pages/Main'
import HomePage from '../pages/HomePage'
import About from '../pages/About'
import Portfolio from '../pages/Portfolio'
import Skills from '../pages/Skills'
import Contact from '../pages/Contact'

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
    },
    {
        path:'/',
        element: <HomePage/>
        
    },
    {
        path:'/portfolio',
        element:<Portfolio/>
    },
    {
        path:'/about',
        element:<About/>
    },
    {
        path:'/skills',
        element:<Skills/>,
        children:[
            {
                path:'/skills',
                element:<Skills/>
            }
        ]
    },
    {
        path:'/contact',
        element:<Contact/>
    }
])


export default router