import React from "react";

const NewsItems = ({ title, description, src, url }) => {
  return (
    // Corrected: 'class' to 'className', removed comma, style fixed
    <div class="card bg-dark text-light mb-3 d-inline-block my-3 mx-3" style={{ width: '18rem' }}>
      <img src={src} style={{height:"200px",width:"343px"}}class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{title.slice(0,50)}</h5>
        <p class="card-text">{description?description.slice(0,90):"this is breacking news right now"}</p>
        <a href={url} class="btn btn-primary">Read More</a>
      </div>
    </div>
  );
};

export default NewsItems;