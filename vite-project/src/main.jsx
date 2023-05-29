import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom"
import Layout from './components/Layout'
import ErrorPage from "./error-page"
import './index.css'
import Home from './pages/Home'
import Contact, { loaderContact } from './pages/Contact/Contact'
import ContactAdd, { contactAction } from './pages/Contact/Add'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/Contacts",
                element: <Contact />,
                loader: loaderContact
            },
            {
                path: "/Contacts/Add",
                element: <ContactAdd />,
                action: contactAction
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
