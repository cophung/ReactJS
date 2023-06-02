import React from 'react'
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => {
    return res.text();
});

const App = () => {
    const { datas, error, isLoading } = useSWR(
        "https://6478083e362560649a2d23bf.mockapi.io/api/test/users",
        fetcher
    );
    console.log(datas, error, isLoading)
    if (error) return <div>An error has occurred.</div>;
    if (isLoading) return <div>Loading...</div>;
    return (
        <div>
            {
                datas.map(item => <div>
                    <p>{item.name} - {item.createdAt}</p>
                </div>)
            }
        </div>
    );
}

export default App