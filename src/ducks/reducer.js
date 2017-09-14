const initialState = {
  userName: '',
  chartData: {
    labels: ['User_Friends', 'User_Likes', 'User_Posts', 'User_Photos', 'User_Tagged_Places', 'Ads_Read'],
    datasets: [
      {
      label: 'Facebook User Information',
      data: [
          187,
          455,
          629,
          1233,
          78,
          929
        ],
      backgroundColor: [
          '#F2E19E',
          '#B5D5EA',
          '#ECBEE2',
          '#F2E19E',
          '#B5D5EA',
          '#ECBEE2'
        ]
      }
    ]
  }
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
