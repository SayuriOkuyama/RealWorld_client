'use client'
import Link from 'next/link'

export default function Pagination({ pageData }) {
  return pageData ? (
    <>
      {[...Array(pageData.last_page).keys()].map(page => {
        const pageNumber = page + 1
        return pageData.current_page === pageNumber ? (
          <li key={pageNumber} className="page-item active">
            <Link className="page-link" href={`page?page=${pageNumber}`}>
              {pageNumber}
            </Link>
          </li>
        ) : (
          <li key={pageNumber} className="page-item">
            <Link className="page-link" href={`page?page=${pageNumber}`}>
              {pageNumber}
            </Link>
          </li>
        )
      })}
    </>
  ) : null
}
