const initialState = {
  userName: ''
}

const FETCH_USERNAME = 'FETCH_USERNAME';

export default function reducer(state=initialState, action) {
  switch(action.type){
    case FETCH_USERNAME:
      return Object.assign({}, state, {userName: action.payload});

    default:
      return state;
  }


}

export function getUser(name){
  return {
    type: FETCH_USERNAME,
    payload: name
  }
}
