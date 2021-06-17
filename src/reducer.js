//import {findAllByDisplayValue} from "@testing-library/dom";

export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    //REMOVE after finish developing.
    //token: "BQByMnJl-wB-BeY9TsqLRvSFMPF1BSE6V9Kr7pA9EJSm1wY8JJCrEyE8Q9j4desvpPOa9HS-sexcUbZBmuWKT5lfo02EUDjzZOHoYO1xfFoUOoNfOMoQCRdlV3vrMWDkn9vElH1oti-eLknYf8cmHspJqx-l",
};

const reducer = (state, action) => {
    console.log(action); //debug

// Action -> type, [payload]

    switch(action.type) {

        case "SET_USER":
            return {
                ...state, //keep whatever that is in the current state
                user: action.user,
            }
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            }
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            }
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            }     
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            }
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            }
        default:
            return state;
    }
}

export default reducer;