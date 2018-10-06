import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT
export default class Search extends Component {
  constructor(){
    super();
    this.state ={
      query: '',
    }
  }

  handleChange = (val) => {
    this.setState({
      query: val
    }, this.props.updateQuery(this.state.query))
  }
    // updateQuery(){
    //   const {updateQuery, sQuery} = this.props;
    //   updateQuery(sQuery)
    //   this.props.updateQuery
    // }

  render() {
    const{searchButton} = this.props;
    //console.log('======== props', this.props)
    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input placeholder="Search iNaturalist's taxa" value={this.state.query} onChange={(e => this.handleChange(e.target.value))}/>

          <SearchIcon onClick={searchButton} id="Search__icon" />
        </div>
        
      </section>
    )
  }
}