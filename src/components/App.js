import React, { Component } from 'react';
import axios from '../../node_modules/axios'
import './App.css';

import Post from './Post/Post';
import Header from './Header/Header';
import Species from './Species/Species';

class App extends Component {
  constructor() {
    super();

    this.state = {
      taxa: [],
      // text: '',
    };

    // this.updatePost = this.updatePost.bind( this );
    // this.deletePost = this.deletePost.bind( this );
    // this.createPost = this.createPost.bind( this );
  }
  
  // componentDidMount() {
  //   let promise = axios.get('https://api.inaturalist.org/v1/users/farawaywolf')
  //   promise.then( result => {
  //     console.log('result.dataresults[0] is',result.data.results[0])
  //     console.log('typeof is ',typeof result.data)
  //     this.setState ({
  //       user: result.data.results[0]
  //     })
  //   })
  // }

  // componentDidMount() {
  //   let taxaRequest = axios.get('https://api.inaturalist.org/v1/taxa?q=brown%20tree%20frog&is_active=true')
  //   taxaRequest.then(result => {
  //     console.log('result.dataresults[0] is',result.data.results[0]['name'])
  //     console.log('typeof is ',typeof result.data.results[0]['name'])
  //     this.setState ({
  //       taxa: result.data.results[0]['name']
  //     })
  //   })
  // }  

  componentDidMount() {
    let taxaRequest = axios.get('https://api.inaturalist.org/v1/taxa?q=brown%20tree%20frog&is_active=true')
    taxaRequest.then(result => {
      // console.log('result.data.results is',result.data.results)
      // console.log('typeof result.data.results is',typeof(result.data.results))
      // console.log('result.data.results[0] is',result.data.results[0])
      // console.log('typeof results.data.results[0] is',typeof(result.data.results[0]))
      // console.log('result.data.results[0]["name"] is',result.data.results[0]['name'])
      // console.log('typeof results.data.results[0]["name"] is',typeof(result.data.results[0]['name']))
      this.setState ({
        taxa: result.data.results
      })
      console.log('this.state.taxa is',this.state.taxa)
      // console.log('typeof this.state.taxa is',typeof(this.state.taxa))
      // console.log('this.state.taxa[0] is',this.state.taxa[0])
      // console.log('typeof this.state.taxa[0] is',typeof(this.state.taxa[0]))
      // console.log('this.state.taxa[0]["name"] is',this.state.taxa[0]['name'])
      // console.log('typeof this.state.taxa[0]["name"] is',typeof(this.state.taxa[0]['name']))
      const {name, preferred_common_name, wikipedia_url, id} = this.state.taxa[0];
      const {square_url} = this.state.taxa[0]['default_photo'];
      // console.log('{name}:',{name},{preferred_common_name},{square_url}, {wikipedia_url})
      // console.log('name',name,preferred_common_name,square_url, wikipedia_url)
      // console.log('name[0]',name[0],matched_term[0],default_photo[0])
    })
  }  
  // updatePost(id, text) {
  //   axios.put(`https://practiceapi.devmountain.com/api/posts?id=${id}`,{text}).then( result => {
  //     this.setState({
  //       posts: result.data
  //     })
  //   })
  // }

  // deletePost(id) {
  //   axios.delete(`https://practiceapi.devmountain.com/api/posts?id=${id}`).then( result => {
  //     this.setState({
  //       posts: result.data
  //     })
  //   })
  // }

  // createPost(text) {
  //   axios.post('https://practiceapi.devmountain.com/api/posts', {text}).then( result => {
  //     this.setState({
  //       posts: result.data
  //     })
  //   })
  // }
  render() {
    const {taxa} = this.state
    console.log({taxa})
    // let defaultPhoto = default_photo;
    // console.log('defaultPhoto:',defaultPhoto, 'typeof:', typeof(defaultPhoto))
    // console.log('default_photo:',taxa[0].default_photo, 'typeof:', typeof(taxa[0].default_photo))
    console.log('default_photo:',taxa[0], 'typeof:', typeof(taxa[0]))
    return (
      <div className="App__parent">
        <Header />

        <section className="Species__content">

          {
            taxa.map(elem => (
              <Species 
              key={elem.id}
              latin_name={elem.name}
              wiki_url={elem.wikipedia_url}
              name={elem.preferred_common_name}
              default_photo={elem.default_photo}
              />
            ))
          }
        </section>
      </div>
    );
  }
}

export default App;
