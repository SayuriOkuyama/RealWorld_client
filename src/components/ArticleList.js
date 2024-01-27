// 'use client'

// import React from 'react'
// import Link from 'next/link'

// // 全投稿を props で受け取る
// export default function ArticleList({ articles }) {
//   return (
//     <>
//       <div>
//         {articles.lice(currentSliceStart, currentSliceEnd).map(article => {
//           return (
//             <>
//               <div className="article-preview">
//                 <div className="article-meta">
//                   <a href="/profile/eric-simons">
//                     <img src="http://i.imgur.com/Qr71crq.jpg" />
//                   </a>
//                   <div className="info">
//                     <a href="/profile/eric-simons" className="author">
//                       Eric Simons
//                     </a>
//                     <span className="date">January 20th</span>
//                   </div>
//                   <button className="btn btn-outline-primary btn-sm pull-xs-right">
//                     <i className="ion-heart" /> 29
//                   </button>
//                 </div>
//                 <Link
//                   href="/article/how-to-build-webapps-that-scale"
//                   className="preview-link">
//                   <h1>{article.title}</h1>
//                   <p>{article.about}</p>
//                   <span>Read more...</span>
//                   <ul className="tag-list">
//                     {article.tags.map(tag => {
//                       return (
//                         <li
//                           key={`${article.id}.${tag.id}`}
//                           className="tag-default tag-pill tag-outline">
//                           {tag.name}
//                         </li>
//                       )
//                     })}
//                   </ul>
//                 </Link>
//               </div>
//             </>
//           )
//         })}
//       </div>

//       <div>
//         {/* 次のステップでsliceパラメータの値を指定します。 */}
//         {articles.slice(currentSliceStart, currentSliceEnd).map(article => (
//           <div key={article.id}>
//             <Link href={`/article/${article.id}`}>
//               <h1>{article.title}</h1>
//               <p>{article.previewText}</p>
//             </Link>
//           </div>
//         ))}
//       </div>
//       {/*ボタンは、投稿の読み込みでさらに 2 つの投稿を読み込み、それ以上投稿を読み込めない場合は表示されなくなります */}
//       {currentSliceEnd < articles.items.length && (
//         <button onClick={nextPage}>Load more posts</button>
//       )}
//     </>
//   )
// }
