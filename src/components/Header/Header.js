import React, { Component } from 'react';
import CompanyIcon from 'react-icons/lib/md/filter-hdr';
import ProfileIcon from 'react-icons/lib/md/person-outline';
import ChangeFav from '../changeFav/changeFav'

import './Header.css';

import Search from '../Search/Search';
//import AddFav from '../AddFav/AddFav';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *APP* COMPONENT

export default class Header extends Component {

  render() {
    const {updateQuery,hQuery,local,getLocal, addFavFn,postLocal, searchButton, seeFavFn} = this.props;
    return (
      <section className="Header__parent">
        <section className="Header__content_top">

          {/* Displays the mountain icon in the header */}
          <div className="Header__company-info">
            {/* <CompanyIcon id="Header__company-icon" /> */}
            <img src="https://static.inaturalist.org/sites/1-logo.svg?1507246408" alt="iNat logo"/>
            {/* <span>Social Mountain</span> */}
          </div>
          {/* <div>
            <ChangeFav
            postLocal={postLocal}
            />
          </div>
          <div className='button__parent'>
            <button className='button__content' onClick={seeFavFn}>See favorite Taxa</button>
          </div> */}

          {/* Displays the search bar */}
          <div className="Header__right">

            <Search updateQuery={updateQuery} searchButton={searchButton} sQuery={hQuery}/>

            <button onClick={getLocal}>See Favorite Taxa</button>
            {/* <p>{local}</p>
            <button onClick={addFavFn}>test postLocal</button> */}
            {/* // <p>{}</p> */}
            
          </div>

        </section >

      </section>  
    )
  }
}


// <button onClick={getLocal}>test getLocal</button>
// <p>{local}</p>
// <button onClick={addFavFn}>test postLocal</button>
// <p>{}</p>

            {/* Displays the profile icon */}
        {/* <section className='Header__content_bottom'>
          <div className="Header__right">
            <button>Add </button>
          </div>
        </section> */}
// <div className="Header__profile">
//               <ProfileIcon />
//             </div>