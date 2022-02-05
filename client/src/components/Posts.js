import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './Posts.css';

export default function Posts(props){
    return (
        <div className='posts'>
            <div className="posts__header">
                <Avatar className='posts__avatar' alt="Rohan" src="/static/images/avatar/1.jpg"/>
                <h3>{props.username}</h3>
            </div>
            <img className='posts__image' src={props.imageUrl} alt=""/>
            <h4  className='posts__text'><strong>{props.captioner} </strong>{props.caption}</h4>
            
        </div>
    )
}
