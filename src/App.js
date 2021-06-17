import React, {useEffect} from "react";
import "./App.css";
import Login from "./Login";
import {getTokenFromUrl} from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import {useDataLayerValue} from "./DataLayer";

//Makes an instance of Spotify inside of our app. i spotify-web-api-js
const spotify = new SpotifyWebApi();

function App() {
  const [{token}, dispatch] = useDataLayerValue();

  useEffect(() => {
    //CODE
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){

      dispatch({
        type:"SET_TOKEN",
        token: _token,
      })

      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {      
        dispatch({
            type: "SET_USER",
            user: user,
        })
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      })

      spotify.getPlaylist("6quzy6aY9lQOgrg2zKn3rs").then(response =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
        )

      spotify.getMyTopArtists().then((response) =>
      dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response, 
      })
      )

      dispatch ({
        type: "SET_SPOTIFY",
        spotify: spotify,
      })

    }
  }, [token,dispatch]);

  return (
    //java's tenth son
    <div className="app">
      {!token && <Login />}
      {token && <Player spotify={spotify} />}
    </div>
  );
}

export default App;
