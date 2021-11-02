import React from "react";

function ArticleList({blogDataObj}) {
  const postArray = blogDataObj.posts.map(postObj => <Article key={postObj.id} title={postObj.title} date={postObj.date} preview={postObj.preview}/>)
  return (
    <main>
   {postArray}
    </main>
  )
}

export default ArticleList