import React, { Component } from 'react';
import ProfileIcon from 'react-icons/lib/md/person-outline';

import './Species.css';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *APP* COMPONENT

export default class Compose extends Component {
  constructor() {
    super();
    
    // this.state = {
    //   text: ''
    // };

    // this.createPost = this.createPost.bind( this );
  }

  // updateText( text ) {
  //   this.setState({ text });
  // }

  // createPost() {
  //   const {text} = this.state;
  //   const {createPostFn} = this.props;
  //   createPostFn(text);
  //   this.setState({text:''});
  // }



  render() {
    // Destructuring
    // const { text } = this.state;
    const {id, name, latin_name, wiki_url, default_photo} = this.props;
      //REASSIGNING PHOTO URL WHERE NULL
    let photo = '';
    if(default_photo === null){
      photo = './question-mark.png'
    } else {
      photo = default_photo.medium_url;
    }
    
    console.log("species",id, name, latin_name, wiki_url, default_photo)
    // console.log("default_photo", default_photo)
    return (
      <section className="Species_box">
        <div className="Species_single">
        <img src={photo} alt=""/></div>
          <div value={id}>{id}</div>
          <div className='name' value={name}>{name}</div>
          <div className='latin_name' value={latin_name}>{latin_name}</div>
          <div value={wiki_url}>
            <a href={wiki_url}>Wikipedia Link for {name}</a>
          </div>
          <div>

          {/* <div value={default_photo}>{default_photo}</div> */}
        </div>
        
      </section>
    )
  }
}