import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/Home/index.jsx';
import Error from './routes/Error/index.jsx';
import Integrantes from './routes/Integrantes/index.jsx';
import Chatbot from './routes/Chatbot/index.jsx';

const router = createBrowserRouter([
  {
    path: '/', element: <App />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/integrantes', element: <Integrantes /> },
      { path: '/chatbot', element: <Chatbot /> },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
