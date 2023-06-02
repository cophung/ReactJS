import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from "./routes/ReactRouter/error-page";
import Contact, {
    loader as contactLoader,
    action as contactAction
} from "./routes/ReactRouter/contact";
import EditContact, {
    action as editAction,
} from "./routes/ReactRouter/edit";
import {
    action as destroyAction
} from "./routes/ReactRouter/destroy";
import Root, {
    action as rootAction,
    loader as rootLoader,
} from "./routes/ReactRouter/root";
import Index from "./routes/ReactRouter/index";

import ContextApp from './Test/React/Context/App';
import ReducerAndContextApp from './Test/React/ReducerAndContext/App';

import SWRApp from './Test/React/APICalls/swr/App'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
        action: rootAction,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    { index: true, element: <Index /> },
                    {
                        path: "contacts/:contactId",
                        element: <Contact />,
                        loader: contactLoader,
                        action: contactAction
                    },
                    {
                        path: "contacts/:contactId/edit",
                        element: <EditContact />,
                        loader: contactLoader,
                        action: editAction,
                    },
                    {
                        path: "contacts/:contactId/destroy",
                        action: destroyAction,
                        errorElement: <div>Oops! There was an error.</div>,
                    },
                ]
            }
        ],
    },
    {
        path: "/React",
        children: [
            {
                path: "Context",
                element: <ContextApp />
            },
            {
                path: "ReducerAndContext",
                element: <ReducerAndContextApp />
            },
            {
                path: "APICalls/swr",
                element: <SWRApp />
            },
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
