import React, { useState, useMemo } from 'react';
import Pagination from '../Pagination';
import data from './data/mock-data.json';
import './style.scss';

let PageSize = 10;

const App = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>FIRST NAME</td>
                        <td>LAST NAME</td>
                        <td>EMAIL</td>
                        <td>PHONE</td>
                    </tr>
                </thead>
                <tbody>
                    {currentTableData.map(item => {
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={data.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </>
    )
}

export default App;