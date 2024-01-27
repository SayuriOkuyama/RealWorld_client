'use client'
// import Link from 'next/link'
import axios from '@/lib/axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'

export default function Page({ params }) {
  const [article, setArticle] = useState([])
  const router = useRouter()

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await axios.get(`api/articles/${params.id}`)
        setArticle(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getArticles()
  }, [])

  const deleteArticle = async () => {
    try {
      await axios.delete(`api/articles/${params.id}`)
      router.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{article.title}</h1>

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
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-plus-round" />
              &nbsp; Follow Eric Simons <span className="counter">(10)</span>
            </button>
            &nbsp;&nbsp;
            <button className="btn btn-sm btn-outline-primary">
              <i className="ion-heart" />
              &nbsp; Favorite Post <span className="counter">(29)</span>
            </button>
            <button
              className="btn btn-sm btn-outline-secondary"
              onClick={() => router.push(`../editor/${params.id}`)}>
              <i className="ion-edit" /> Edit Article
            </button>
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={deleteArticle}>
              <i className="ion-trash-a" /> Delete Article
            </button>
          </div>
        </div>
      </div>

      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            <Markdown>{article.content}</Markdown>

            <ul className="tag-list">
              {article.tagList && article.tagList.length > 0
                ? article.tagList.map(tag => {
                    return (
                      <li
                        key={`${article.id}.${tag.id}`}
                        className="tag-default tag-pill tag-outline">
                        {tag}
                      </li>
                    )
                  })
                : null}
            </ul>
          </div>
        </div>

        <hr />

        <div className="article-actions">
          <div className="article-meta">
            <a href="profile.html">
              <img src="http://i.imgur.com/Qr71crq.jpg" />
            </a>
            <div className="info">
              <a href="" className="author">
                Eric Simons
              </a>
              <span className="date">January 20th</span>
            </div>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-plus-round" />
              &nbsp; Follow Eric Simons
            </button>
            &nbsp;
            <button className="btn btn-sm btn-outline-primary">
              <i className="ion-heart" />
              &nbsp; Favorite Article <span className="counter">(29)</span>
            </button>
            <button
              className="btn btn-sm btn-outline-secondary"
              onClick={() => router.push(`../editor/${params.id}`)}>
              <i className="ion-edit" /> Edit Article
            </button>
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={deleteArticle}>
              <i className="ion-trash-a" /> Delete Article
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-8 offset-md-2">
            <form className="card comment-form">
              <div className="card-block">
                <textarea
                  className="form-control"
                  placeholder="Write a comment..."
                  rows="3"
                />
              </div>
              <div className="card-footer">
                <img
                  src="http://i.imgur.com/Qr71crq.jpg"
                  className="comment-author-img"
                />
                <button className="btn btn-sm btn-primary">Post Comment</button>
              </div>
            </form>

            <div className="card">
              <div className="card-block">
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
              <div className="card-footer">
                <a href="/profile/author" className="comment-author">
                  <img
                    src="http://i.imgur.com/Qr71crq.jpg"
                    className="comment-author-img"
                  />
                </a>
                &nbsp;
                <a href="/profile/jacob-schmidt" className="comment-author">
                  Jacob Schmidt
                </a>
                <span className="date-posted">Dec 29th</span>
              </div>
            </div>

            <div className="card">
              <div className="card-block">
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
              <div className="card-footer">
                <a href="/profile/author" className="comment-author">
                  <img
                    src="http://i.imgur.com/Qr71crq.jpg"
                    className="comment-author-img"
                  />
                </a>
                &nbsp;
                <a href="/profile/jacob-schmidt" className="comment-author">
                  Jacob Schmidt
                </a>
                <span className="date-posted">Dec 29th</span>
                <span className="mod-options">
                  <i className="ion-trash-a" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
