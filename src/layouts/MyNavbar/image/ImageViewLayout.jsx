import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';
export default function ImageView(props) {
    return (
        <div class="card" style={{ width: "18rem" }}>
            <Link to={props.image.link} >
                <img className="card-img-top" style={props.style} src={props.image.image} alt={props.alt} />
            </Link>
            <div class="card-body">
                <h5 class="card-title">{props.image.title}</h5>
                <p class="card-text">{props.image.content}</p>
                <a href="#" class="btn btn-primary">Add to Bag</a>
            </div>
        </div>
    );
}