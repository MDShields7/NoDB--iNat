import React, { Component } from 'react';
import axios from '../../node_modules/axios'
import './App.css';
import Header from './Header/Header';
import Species from './Species/Species';

class App extends Component {
  constructor() {
    super();
    this.state = {
      taxa: [],
      searchQuery:'brown tree frog',
      queryStr:'brown%20tree%20frog',
      // //favList is entire favList
      getLocalTemp:['hello'],
      //favId gets add to fav list
   
    }
    this.updateQuery = this.updateQuery.bind( this );
    this.queryLocal = this.getLocal.bind( this );
    this.searchApiCall = this.searchApiCall.bind( this );
    this.addFavFn = this.addFavFn.bind(this);
    this.getLocal = this.getLocal.bind(this);
    this.postLocal = this.postLocal.bind(this);
  }
  // EXTERNAL REQUESTS
  updateQuery(e){
    let str = encodeURI(e)
    this.setState({
      query: e,
      queryStr: str,
    })
  }
  searchApiCall = () => {
    axios.get(`https://api.inaturalist.org/v1/taxa?q=${this.state.queryStr}`).then(result => {console.log('searchApiCall running',result.data.results);
  //   let photoArr = result.data.results;
  //   for (let i = 0; i < photoArr.length; i++){
  //     for( let key in photoArr[i]){
  //       let {default_photo} = photoArr[i][key]
  //       if(photoArr[i][key] = default_photo && default_photo === null) { 
  //           default_photo = './question-mark.png'
  //         } else if (photoArr[i][key] = default_photo && typeof(default_photo) === 'object'){
  //           default_photo = default_photo.medium_url;
  //           console.log('name',photoArr[i]['name'],'making photo', default_photo)
  //         }   
  //     }
  // }
      this.setState ({
        taxa: result.data.results
      })
    })
  }
  componentDidMount() {
    this.updateQuery();
    this.searchApiCall();
  }  
  //FUNCTIONAL REQUESTS
  addFavFn(e){
    console.log('addFavFn running, before postLocal, e is', e)
    this.setState({
      favId: e,
    }, () =>
    this.postLocal(e))
  }

  modifyPhoto(){

  }
  // changeFavFn(e){
  //   console.log('changeFavFn running, before putLocal, e is',e)
  //     this.setState({
  //       favId: e,
  //     })
  // }
  seeFavFn (){
    axios.get('http://localhost:4000/api/data').then(res => {
      console.log('seeFavFn running, res is',res);
      console.log('seeFavFn running, res.data is',res.data);

      this.setState({
        taxa: res.data
      })
    })  
  }
  // LOCAL REQUESTS
  getLocal(){
    axios.get('http://localhost:4000/api/data').then(res => {
      console.log('getLocal running, res.data is',res.data);
      let ArrFiltered = res.data.filter(elem => elem !== null)
      console.log('ArrFiltered is', ArrFiltered)
      this.setState({
        taxa: ArrFiltered
      })
    })
  }
  putLocal(){
    axios
  }
postLocal(){
  axios.post('http://localhost:4000/api/data', {id:this.state.favId}).then(res => {
    console.log('postLocal running, res.data is',res.data);

  })
}

  render() {
    const {taxa, favId} = this.state
    console.log('render running',this.state.taxa)
    // console.log('this.state',this.state)
    return (
      <div className="App__parent">
        <Header
        seeFavFn={this.seeFavFn}
        addFavFn={this.addFavFn}
        getLocal={this.getLocal}
        postLocal={this.postLocal}
        local={this.state.getLocalTemp}
        updateQuery={this.updateQuery} 
        searchButton={this.searchApiCall} 
        postLocal={this.postLocal}
        hQuery={this.state.searchQuery}/>
        <section className="Species__parent">
          <section className="Species__content">
            {
              taxa.map(elem => (
                <Species
                
                addFavFn={this.addFavFn}
                id={elem.id}
                latin_name={elem.name}
                wiki_url={elem.wikipedia_url}
                name={elem.preferred_common_name}
                default_photo={elem.default_photo}
                />

              ))
            }
          </section>
        </section>
      </div>
    );
  }
}

export default App;


/*
    let taxaRequest = axios.get('https://api.inaturalist.org/v1/taxa?q=brown%20tree%20frog&is_active=true')
    taxaRequest.then(result => {

      console.log('result.data.results is',result.data.results)
      console.log('typeof result.data.results is',typeof(result.data.results))
      console.log('result.data.results[0] is',result.data.results[0])
      console.log('typeof results.data.results[0] is',typeof(result.data.results[0]))
      console.log('result.data.results[0]["name"] is',result.data.results[0]['name'])
      console.log('typeof results.data.results[0]["name"] is',typeof(result.data.results[0]['name']))
      this.setState ({
        taxa: result.data.results
      })
          console.log('this.state.taxa is',this.state.taxa)
      console.log('typeof this.state.taxa is',typeof(this.state.taxa))
      console.log('this.state.taxa[0] is',this.state.taxa[0])
      console.log('typeof this.state.taxa[0] is',typeof(this.state.taxa[0]))
      console.log('this.state.taxa[0]["name"] is',this.state.taxa[0]['name'])
      console.log('typeof this.state.taxa[0]["name"] is',typeof(this.state.taxa[0]['name']))
      const {name, preferred_common_name, wikipedia_url, id} = this.state.taxa[0];
      const {square_url} = this.state.taxa[0]['default_photo'];
      console.log('{name}:',{name},{preferred_common_name},{square_url}, {wikipedia_url})
      console.log('name',name,preferred_common_name,square_url, wikipedia_url)
      console.log('name[0]',name[0],matched_term[0],default_photo[0])
  */

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

          //console.log({taxa})
    // let defaultPhoto = default_photo;
    // console.log('defaultPhoto:',defaultPhoto, 'typeof:', typeof(defaultPhoto))
    // console.log('default_photo:',taxa[0].default_photo, 'typeof:', typeof(taxa[0].default_photo))
        //console.log('default_photo:',taxa[0], 'typeof:', typeof(taxa[0]))

          // componentDidMount() {
  //   let promise = axios.get('https://api.inaturalist.org/v1/users/farawaywolf')
  //   promise.then( result => {
  //     console.log('result.data.results[0] is',result.data.results[0])
  //     console.log('typeof is ',typeof result.data)
  //     this.setState ({
  //       user: result.data.results[0]
  //     })
  //   })
  // }

  // componentDidMount() {
  //   let taxaRequest = axios.get('https://api.inaturalist.org/v1/taxa?q=brown%20tree%20frog&is_active=true')
  //   taxaRequest.then(result => {
  //     console.log('result.data.results[0] is',result.data.results[0]['name'])
  //     console.log('typeof is ',typeof result.data.results[0]['name'])
  //     this.setState ({
  //       taxa: result.data.results[0]['name']
  //     })
  //   })
  // }  