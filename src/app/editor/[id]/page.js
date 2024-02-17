'use client'
import axios from '@/lib/axios'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Page({ params }) {
  const [title, setTitle] = useState()
  const [about, setAbout] = useState()
  const [content, setContent] = useState()
  const [tags, setTags] = useState([])
  const [composing, setComposition] = useState(false)
  const startComposition = () => setComposition(true)
  const endComposition = () => setComposition(false)
  const router = useRouter()

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await axios.get(`api/articles/${params.id}`)
        setTitle(response.data.title)
        setAbout(response.data.about)
        setContent(response.data.content)
        setTags(response.data.tagList)
      } catch (err) {
        // console.log(err)
      }
    }
    getArticles()
  }, [])

  const updateArticle = () => {
    const requestBody = {
      article: {
        title: title,
        description: about,
        body: content,
        tagList: tags,
      },
    }
    const sendRequest = async () => {
      try {
        const response = await axios.put(
          `api/articles/${params.id}`,
          requestBody,
        )
        const id = response.data.id
        router.push(`/article/${id}`)
      } catch (err) {
        // console.log(err)
      }
    }
    sendRequest()
  }

  const handleInputKeyDown = e => {
    if (!composing && e.key === 'Enter') {
      setTags([...tags, e.target.value])
      e.target.value = ''
    }
  }

  return (
    <>
      <div className="editor-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-xs-12">
              <form>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      type="text"
                      name="title"
                      className="form-control form-control-lg"
                      value={title}
                      onChange={e => setTitle(e.target.value)}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      type="text"
                      name="about"
                      className="form-control"
                      value={about}
                      onChange={e => setAbout(e.target.value)}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <textarea
                      name="content"
                      className="form-control"
                      rows="8"
                      value={content}
                      onChange={e => setContent(e.target.value)}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      type="text"
                      name="tags[]"
                      className="form-control"
                      placeholder="Enter tags"
                      onCompositionStart={startComposition}
                      onCompositionEnd={endComposition}
                      onKeyDown={handleInputKeyDown}
                    />
                    <div className="tag-list">
                      {tags && tags.length > 0
                        ? tags.map(tag => {
                            return (
                              <>
                                <label
                                  key={tag}
                                  className="tag-label"
                                  htmlFor={`input${tag}`}>
                                  <span className="tag-default tag-pill">
                                    <i className="ion-close-round" />
                                    {tag}
                                  </span>
                                </label>
                                <input
                                  id={`input${tag}`}
                                  name="tags[]"
                                  type="text"
                                  hidden
                                  value={tag}
                                />
                              </>
                            )
                          })
                        : null}
                    </div>
                  </fieldset>
                  <button
                    className="btn btn-lg pull-xs-right btn-primary"
                    type="button"
                    onClick={updateArticle}>
                    Publish Article
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
