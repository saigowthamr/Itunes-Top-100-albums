import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import Header from './components/header';
import Albums from './components/albums';

class App extends Component {
  state = {
    posts: [],
    show:true
  };



  componentDidMount() {


    axios
      .get(`https://itunes.apple.com/in/rss/topalbums/limit=100/json`)
      .then(res => {
         this.setState({show:false})

        this.setState({ posts: res.data.feed.entry });
      });

  }



  render() {


    const load = <h1 className="load">Loading...</h1>

    const albums = this.state.posts.map(e => {
      return (

        <Albums key={e.id.label} image={e["im:image"][2].label}
            title={e.title.label}
            link={e.id.label}
            price={e["im:price"].label}
            date={e["im:releaseDate"].label}
        />
      );
    });

    return (

      <div className="app">
      <Header/>
      <div className="albums">
        {this.state.show ? load:albums}
        </div>

      </div>
    );
  }
}

export default App;












