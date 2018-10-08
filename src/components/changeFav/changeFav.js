import React, {Component} from 'react';
import SearchIcon from 'react-icons/lib/md/search';

import './changeFav.css'

// import SearchIcon from '../../../node_modules/react-icons/lib/md/search';

export default class changeFav extends Component {
    constructor (){
        super();
        this.state = {
            changeFavTemp: ''
        }
    }
    render(){
        return (
            <div className='Search__parent'>
                <div className='Search__content'>
                <input placeholder="Give your favorites a nickname" value={this.state.changeFavTemp} onChange={(e => this.handleChange(e.target.value))}/>

                <SearchIcon onClick={this.props.postLocal} id="Search__icon" />

                </div>
            </div>


        )
    }
}