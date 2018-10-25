import React, { Suspense, lazy, Component } from 'react';
import axios from "axios";
import Header from './components/header';
import "./App.css";

const Albums = lazy(() => import('./components/albums'));


class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios
      .get(`https://itunes.apple.com/in/rss/topalbums/limit=100/json`)
      .then(res => {
        this.setState({ posts: res.data.feed.entry });
      });
  }

  render() {
    const loadingImg = <div className="album-img">
      <img alt="loading" src="https://media.giphy.com/media/y1ZBcOGOOtlpC/200.gif" />
    </div>

    const albums = this.state.posts.map(e => {
      return (
        <Suspense key={e.id.label} fallback={loadingImg}>
          <Albums
            image={e["im:image"][2].label}
            title={e.title.label}
            link={e.id.label}
            price={e["im:price"].label}
            date={e["im:releaseDate"].label}
          />
        </Suspense>
      );
    });

    return (
      <div className="app">
        <Header />
        <div className="albums">
          {albums}
        </div>
      </div>
    );
  }
}

export default App;












