//import * as types from '../actions/actionTypes';

const initialState = {
  questions: ["is this fun?"]
};

export default function questions(state = initialState, action = {}) {
  console.log("welcome to the question reducer!")
  switch (action.type) {
    case "ADD_NEW_QUESTION":
      var newArray = state.questions.slice(0)
      newArray.push(action.data)
      return {
        ...state,
        newArray
      };
    default:
      return state;
  }
}
