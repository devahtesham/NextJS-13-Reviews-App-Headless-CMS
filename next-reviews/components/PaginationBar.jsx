import Link from 'next/link'
import React from 'react'

const PaginationBar = (props) => {
    const {page,pageCount,segment} = props
    const disableBtn = "opacity-[0.29] pointer-events-none"
    return (
        <div className="pagination flex justify-center pt-4 ">
            <div className="flex gap-3">
                <Link href={`${segment}?page=${page - 1}`} className={`${page === 1 ? disableBtn : ""}`}>&lt;</Link>
                <span>Page {page} of {pageCount}</span>
                <Link href={`${segment}?page=${page + 1}`} className={`${page === pageCount ? disableBtn : ""}`}>&gt;</Link>
            </div>
        </div>
    )
}

export default PaginationBar