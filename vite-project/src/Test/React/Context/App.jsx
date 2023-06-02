import React from 'react'

import Heading from './Heading';
import Section from './Section';

const Post = ({ title, body }) => {
    return (
        <Section level={2}>
            <Heading>
                {title}
            </Heading>
            <p><i>{body}</i></p>
        </Section>
    );
}

const RecentPosts = () => {
    return (
        <Section level={1}>
            <Heading>Recent Posts</Heading>
            <Post
                title="Flavors of Lisbon"
                body="...those pastéis de nata!"
            />
            <Post
                title="Buenos Aires in the rhythm of tango"
                body="I loved it!"
            />
        </Section>
    );
}

const AllPosts = () => {
    return (
        <Section level={2}>
            <Heading>Posts</Heading>
            <RecentPosts />
        </Section>
    );
}

const App = () => {
    return <>
        <Section level={0}>
            <Heading>Title</Heading>
            <Post
                title="Hello traveller!"
                body="Read about my adventures."
            />
            <AllPosts />
        </Section>
    </>
}

export default App