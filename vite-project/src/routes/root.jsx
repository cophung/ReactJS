import { useEffect, useState } from "react";
import {
    Form,
    NavLink,
    Outlet,
    redirect,
    useLoaderData,
    useNavigation,
    useSubmit
} from "react-router-dom";
import {
    createContact,
    getContacts
} from "./contacts";

export async function action() {
    const contact = await createContact();
    return redirect(`/contacts/${contact.id}/edit`);
}

export async function loader({ request }) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const contacts = await getContacts(q);
    return { contacts, q };
}

export default function Root() {
    const { contacts, q } = useLoaderData();
    const [query, setQuery] = useState(q ?? '');
    const navigation = useNavigation();
    const submit = useSubmit();

    const searching =
        navigation.location &&
        new URLSearchParams(navigation.location.search).has(
            "q"
        );

    useEffect(() => {
        setQuery(q ?? '');
    }, [q]);

    return (
        <div id="react-router-root">
            <div id="react-router-sidebar">
                <h1>React Router Contacts</h1>
                <div>
                    <Form id="search-form" role="search">
                        <input
                            id="q"
                            className={searching ? "react-router-input loading" : "react-router-input"}
                            aria-label="Search contacts"
                            placeholder="Search"
                            type="search"
                            name="q"
                            value={query}
                            onChange={(event) => {
                                setQuery(event.target.value ?? '');
                                const isFirstSearch = q == null;
                                submit(event.currentTarget.form, {
                                    replace: !isFirstSearch,
                                });

                            }}
                        />
                        <div
                            id="react-router-search-spinner"
                            aria-hidden
                            hidden={!searching}
                        />
                        <div
                            className="react-router-sr-only"
                            aria-live="polite"
                        ></div>
                    </Form>
                    <Form method="post">
                        <button className="react-router-button" type="submit">New</button>
                    </Form>
                </div>
                <nav>
                    {contacts.length ? (
                        <ul>
                            {contacts.map((contact) => (
                                <li key={contact.id}>
                                    <NavLink
                                        to={`contacts/${contact.id}`}
                                        className={({ isActive, isPending }) =>
                                            isActive
                                                ? "active"
                                                : isPending
                                                    ? "pending"
                                                    : ""
                                        }
                                    >
                                        {contact.first || contact.last ? (
                                            <>
                                                {contact.first} {contact.last}
                                            </>
                                        ) : (
                                            <i>No Name</i>
                                        )}{" "}
                                        {contact.favorite && <span>★</span>}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>
                            <i>No contacts</i>
                        </p>
                    )}
                </nav>
            </div>
            <div
                id="react-router-detail"
                className={
                    navigation.state === "loading" ? "loading" : ""
                }
            >
                <Outlet />
            </div>
        </div>
    );
}