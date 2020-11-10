import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import QueryForm from './components/QueryForm.js';

function App() {
  const generateURL = (query) => {
    console.log(query);

    let url = "https://api.spotify.com/v1/recommendations";
    if (query) {
      url += "?";
      for (let item in query) {
        url += `${item}=${query[item]}&`
      }
    }

    //remove the last &
    url = url.substring(0, url.length - 1);

    console.log(url);

    return url;
  }

  const getRecommendation = async (query) => {
    const url = generateURL(query);

    // fetch function can go here
  }

  return (
    <div style={{ textAlign: 'center', width: '50vw', margin: 'auto' }}>
      <QueryForm onSubmit={getRecommendation} />
    </div>
  );
}

export default App;
