import React, { Suspense } from 'react';
import { defer, Link, useLoaderData, Await } from 'react-router-dom';

export const loaderContact = async () => {
    const response = await fetch(`https://localhost:44356/api/Artists`);
    const contactsPromise = await response.json();
    return defer({ contactsPromise })
}

const Contact = () => {
    const { contactsPromise } = useLoaderData();

    return (
        <>
            <h1>Contact Us</h1>
            <Link to="/Contacts/Add">Add</Link>
            <Suspense fallback={<small>Loading Comments...</small>}>
                <Await resolve={contactsPromise}>
                    {
                        (contacts) => contacts.map((item, index) => <div key={index}>{item.id} - {item.name}</div>)
                    }
                </Await>
            </Suspense>
        </>
    )
}

export default Contact