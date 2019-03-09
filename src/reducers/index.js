import {combineReducers} from 'redux';

const songsReducer = () => {
    return[
        {title: 'no scrub', duration: '3:34'},
        {title: 'macarena', duration: '3:35'},
        {title: 'all star', duration: '4:40'},
        {title: 'back', duration: '3:34'},
    ];

};

const selectedSongReducer = (selectedSong = null, action) =>{

    if(action.type ==='SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;

};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});