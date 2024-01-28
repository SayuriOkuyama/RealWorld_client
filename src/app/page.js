'use client'
import Link from 'next/link'
import axios from '../lib/axios'
import React, { useEffect, useState } from 'react'
import Pagination from '@/components/Pagination'
import { useSearchParams } from 'next/navigation'

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
        console.log(err)
      }
    }
    getArticles()
  }, [])

  return (
    <>
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
                      Your Feed
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="">
                      Global Feed
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                {articles.map(article => {
                  return (
                    <>
                      <div className="article-preview">
                        <div className="article-meta">
                          <a href="/profile/eric-simons">
                            <img src="http://i.imgur.com/Qr71crq.jpg" />
                          </a>
                          <div className="info">
                            <a href="/profile/eric-simons" className="author">
                              Eric Simons
                            </a>
                            <span className="date">January 20th</span>
                          </div>
                          <button className="btn btn-outline-primary btn-sm pull-xs-right">
                            <i className="ion-heart" /> 29
                          </button>
                        </div>
                        <Link
                          href={`/article/${article.id}`}
                          className="preview-link">
                          <h1>{article.title}</h1>
                          <p>{article.about}</p>
                          <span>Read more...</span>
                          <ul className="tag-list">
                            {article.tags.map(tag => {
                              return (
                                <li
                                  key={`${article.id}.${tag.id}`}
                                  className="tag-default tag-pill tag-outline">
                                  {tag.name}
                                </li>
                              )
                            })}
                          </ul>
                        </Link>
                      </div>
                    </>
                  )
                })}
              </div>

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
    </>
  )
}

export default Home
