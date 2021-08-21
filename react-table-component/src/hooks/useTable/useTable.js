import { useState } from "react";

const useTable = ({ columns, data, pagination }) => {
    const [pageIndex, setPageIndex] = useState(0);

    const headers = columns.map(column => ({
        label: column.label,
    }));

    const allRows = data.map(dataRow => {
        const cells = columns.map(({ accessor }) => {
            const renderedValue = typeof accessor === "function" ? accessor(dataRow) : dataRow[accessor]

            return { renderedValue }
        })

        return { cells }
    });

    const rows = pagination ? allRows.slice(pageIndex * pagination.pageSize, (pageIndex + 1) * pagination.pageSize) : allRows;

    const nextPage = () => {
        setPageIndex(pageIndex + 1);
    }

    const previousPage = () => {
        setPageIndex(pageIndex - 1);
    }

    return {
        headers,
        pagination: {
            nextPage,
            pageNumber: pageIndex + 1,
            previousPage,
            totalPages: pagination ? Math.ceil(allRows.length / pagination.pageSize) : 1
        },
        rows,
    }
}

export default useTable;