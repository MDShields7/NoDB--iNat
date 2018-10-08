import React, {Component} from 'react';

import './addFav.css'

export default function addFav(props){
    return (
        <div className='addFav__parent'>
            <button

            onClick={() => props.addFavFn(props.id)}
            >Add to favorite Taxa!</button>
        </div>
    )
}
