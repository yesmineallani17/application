import React from 'react';
import './Guide.scss';

import { Link } from 'react-router-dom';

const Guide = ({ post, onDelete }) => {
  return (
    <div className="Guide_Page_Container">
      <div className="rectangle2">
        <img className="culture_img" src={post.image} alt="category-img" />
        <div className="titre4">{post.title}</div>
        <Link to={`/categories/${post.title}`}>
          <button className="ed">Edit</button>
        </Link>
        {/* <div className="boutton"><div className="add_edit">Add / Edit</div>  </div> */}
        <div className="on_off">
          <div className="circle"></div> <div className="titre5">OFF</div>{' '}
        </div>
        <div className="pbl" onClick={() => onDelete(post.id)}>
          <img className="poubelle" src="img/poubelle.png" alt="delete-icon" />
        </div>
      </div>
    </div>
  );
};

export default Guide;
