import Link from 'next/link'

export default function UserArticles({ articles }) {
  return (
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
                    {article.user.name}
                  </a>
                  <span className="date">{article.updated_at}</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                  <i className="ion-heart" /> 29
                </button>
              </div>
              <Link href={`/article/${article.id}`} className="preview-link">
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
  )
}
