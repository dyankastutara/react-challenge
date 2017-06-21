import React from 'react';
import { connect } from 'react-redux';
import { Media } from 'react-bootstrap';

const ListNews = (props) => {
  var listnews = props.listNews.result
  if(listnews){
    return(
      <div>
      {
        listnews.articles.map((article, index)=>{
          return(
            <Media key={index}>
              <Media.Left>
                <img width={64} height={64} src={article.urlToImage} alt="..."/>
              </Media.Left>
              <Media.Body>
                <Media.Heading><a href={article.url}>{article.title}</a></Media.Heading>
                <p>{article.description}</p>
                <p><small>Posted By: {article.author} || Published At: {article.publishedAt}</small></p>
              </Media.Body>
            </Media>
          )
        })
      }
      </div>
    )
  }else{
    return(
      <div>
        <div>Load...</div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    listNews: state.listArticles
  }
}

export default connect(mapStateToProps)(ListNews);
