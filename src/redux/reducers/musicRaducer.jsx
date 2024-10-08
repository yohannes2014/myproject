import {
    FETCH_MUSIC_FAILURE,
    FETCH_MUSIC_REQUEST,
    FETCH_MUSIC_SUCCESS,
    ADD_MUSIC_REQUEST,
    ADD_MUSIC_SUCCESS,
    ADD_MUSIC_FAILURE,
    DELETE_MUSIC_REQUEST,
    DELETE_MUSIC_SUCCESS,
    DELETE_MUSIC_FAILURE


} from "../actions/MusicActions";


const initialState = {
    musics: [],
    loading: false,
    error: null,


    
};

const musicRaducer = (state = initialState, action) => {
    switch (action.type) {
       
        case FETCH_MUSIC_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_MUSIC_SUCCESS:
            return { ...state, loading: false, musics: action.payload };
        case FETCH_MUSIC_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case ADD_MUSIC_REQUEST:
            return { ...state, loading: true, error: null };
        case ADD_MUSIC_SUCCESS:
            return { ...state, loading: false, musics: [...state.musics, action.payload] }
        case ADD_MUSIC_FAILURE:
            return { ...state, loading: false, error: action.payload }
        case DELETE_MUSIC_REQUEST:
                return { ...state, loading: true, error: null };
        case DELETE_MUSIC_SUCCESS:
                return {...state,
                  loading: false,
                  musicList: state.musics.filter(music => music.id !== action.payload), 
                };
        case DELETE_MUSIC_FAILURE:
                return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default musicRaducer;

