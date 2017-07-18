//import * as types from '../actions/actionTypes';

const initialState = {
  line: ""
};

export default function api(state = initialState, action = {}) {
  console.log("welcome to the api reducer!")
  switch (action.type) {
    case "GOT_API_DATA":
      var rand = Math.floor(Math.random()*action.data.length)
      var game = action.data[rand]
      var str = game.HomeTeam + " (" + game.MoneyLineHome + ")"
      return {
        ...state,
        line: str
      };
    default:
      return state;
  }
}
