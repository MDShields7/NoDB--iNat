import React, { Component } from 'react';
import CompanyIcon from 'react-icons/lib/md/filter-hdr';
import ProfileIcon from 'react-icons/lib/md/person-outline';


import './Header.css';

import Search from '../Search/Search';
//import AddFav from '../AddFav/AddFav';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *APP* COMPONENT

export default class Header extends Component {

  render() {
    const {updateQuery,hQuery,local,getLocal, postLocal } = this.props;
    return (
      <section className="Header__parent">
        <section className="Header__content_top">

          {/* Displays the mountain icon in the header */}
          <div className="Header__company-info">
            <CompanyIcon id="Header__company-icon" />
            <span>Social Mountain</span>
          </div>

          {/* Displays the search bar */}
          <div className="Header__right">

            <Search updateQuery={updateQuery} searchButton={this.props.searchButton} sQuery={hQuery}/>
            <button onClick={getLocal}>test getLocal</button>
            <p>{local}</p>
            <button onClick={postLocal}>test postLocal</button>
            <p>{local}</p>
            {/* Displays the profile icon */}
            <div className="Header__profile">
              <ProfileIcon />
            </div>
          </div>

        </section >
        {/* <section className='Header__content_bottom'>
          <div className="Header__right">
            <button>Add </button>
          </div>
        </section> */}
      </section>  
    )
  }
}