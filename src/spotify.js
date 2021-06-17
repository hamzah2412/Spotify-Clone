// https://developer.spotify.com/
// documentation/web-playback-sdk/quick/quickstart/#

//Bring you to Spotify
export const authEndpoint =
"https://accounts.spotify.com/authorize";
// http://localhost:3000/
const redirectUri = "https://spotify-clone-5a237.web.app";
const clientId = "37cb1bd68d9841c6a618e2d94498c453";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
        var parts = item.split("=");
        initial[parts[0]] = 
        decodeURIComponent(parts[1]);

        return initial;
    }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

