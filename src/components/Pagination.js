'use client'
import Link from 'next/link'

export default function Pagination({ pageData }) {
  return pageData ? (
    <>
      {[...Array(pageData.last_page).keys()].map(page => {
        const pageNumber = page + 1
        return (
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
