import React, {Component} from 'react';

import './addFav.css'

export default function addFav(props){
    return (
        <div className='addFav__parent'>
            <button

            onClick={() => props.addFavFn(
                {name:props.name,
                latin_name:props.latin_name,
                id:props.id,
                wiki_url:props.wiki_url,
                photo:props.photo})
            }
            >Add to favorite Taxa!</button>
        </div>
    )
}
