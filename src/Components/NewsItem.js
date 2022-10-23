import React from 'react';

const NewsItem = (props)=>   {
  

      let {title, description, imageURL, newsURL, source} = props;

    return ( <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>
    {source}
    </span>
  <img src={imageURL} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}...</p>
    <a href={newsURL} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
    </div>
    )
  }


export default NewsItem;
