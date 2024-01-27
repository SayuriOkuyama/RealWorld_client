'use client'
import axios from '@/lib/axios'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Page() {
  const [title, setTitle] = useState()
  const [about, setAbout] = useState()
  const [content, setContent] = useState()
  const [tags, setTags] = useState([])
  const [composing, setComposition] = useState(false)
  const startComposition = () => setComposition(true)
  const endComposition = () => setComposition(false)
  const router = useRouter()

  const handleSubmit = () => {
    const requestBody = {
      article: {
        title: title,
        description: about,
        body: content,
        tagList: tags,
      },
    }
    const sendRequest = async () => {
      await axios.post('api/articles', requestBody)
      router.push('/')
    }
    sendRequest()
  }

  const handleInputKeyDown = e => {
    if (!composing && e.key === 'Enter') {
      setTags([...tags, e.target.value])
      e.target.value = ''
    }
  }

  // const updateArticle = async () => {
  //   const requestBody = {
  //     article: {
  //       title: title,
  //       description: about,
  //       body: content,
  //       tagList: tags,
  //     }
  //   try {
  //     const response = await axios.put(`api/articles/${params.id}`, data)
  //     const id = response.data.id
  //     router.push(`/article/${id}`)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  return (
    <>
      <div className="editor-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-xs-12">
              {/* <ul className="error-messages">
                <li>That title is required</li>
              </ul> */}

              <form>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      type="text"
                      name="title"
                      className="form-control form-control-lg"
                      placeholder="Article Title"
                      onChange={e => setTitle(e.target.value)}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      type="text"
                      name="about"
                      className="form-control"
                      placeholder="What's this article about?"
                      onChange={e => setAbout(e.target.value)}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <textarea
                      name="content"
                      className="form-control"
                      rows="8"
                      placeholder="Write your article (in markdown)"
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
                    onClick={handleSubmit}>
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
