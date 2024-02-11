'use client'
import axios from '../lib/axios'
import React, { useEffect, useState } from 'react'
import Pagination from '@/components/Pagination'
import AllArticles from '@/components/AllArticles'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

const Home = () => {
  const [pageData, setPageData] = useState()
  const [articles, setArticles] = useState([])
  const searchParams = useSearchParams()
  const page = searchParams.get('page')

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await axios.get(`api/articles?page=${page}`)

        setPageData(response.data)
        setArticles(response.data.data)
      } catch (err) {
        // console.log(err)
      }
    }
    getArticles()
  }, [])

  return (
    <>
      <Suspense>
        <div className="home-page">
          <div className="banner">
            <div className="container">
              <h1 className="logo-font">conduit</h1>
              <p>A place to share your knowledge.</p>
            </div>
          </div>
          <div className="container page">
            <div className="row">
              <div className="col-md-9">
                <div className="feed-toggle">
                  <ul className="nav nav-pills outline-active">
                    <li className="nav-item">
                      <a className="nav-link" href="">
                        あなたの投稿
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="">
                        すべての投稿
                      </a>
                    </li>
                  </ul>
                </div>

                <AllArticles articles={articles} />

                <ul className="pagination">
                  <Pagination pageData={pageData} />
                </ul>
              </div>

              <div className="col-md-3">
                <div className="sidebar">
                  <p>Popular Tags</p>

                  <div className="tag-list">
                    <a href="" className="tag-pill tag-default">
                      programming
                    </a>
                    <a href="" className="tag-pill tag-default">
                      javascript
                    </a>
                    <a href="" className="tag-pill tag-default">
                      emberjs
                    </a>
                    <a href="" className="tag-pill tag-default">
                      angularjs
                    </a>
                    <a href="" className="tag-pill tag-default">
                      react
                    </a>
                    <a href="" className="tag-pill tag-default">
                      mean
                    </a>
                    <a href="" className="tag-pill tag-default">
                      node
                    </a>
                    <a href="" className="tag-pill tag-default">
                      rails
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </>
  )
}

export default Home
