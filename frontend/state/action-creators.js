// ❗ You don't need to add extra action creators to achieve MVP

import { MOVE_CLOCKWISE,SET_QUIZ_INTO_STATE,SET_SELECTED_ANSWER,SET_INFO_MESSAGE, } from "./action-types"
import * as types from './action-types'
import axios from "axios"

export function moveClockwise() { 
  return {
    type:types.MOVE_CLOCKWISE,
  }
}

export function moveCounterClockwise() { }

export function selectAnswer(answer) { 
  return{
    type: types.SET_SELECTED_ANSWER,
    payload:answer
  }
}

export function setMessage(message) {
  return  {
    type:types.SET_INFO_MESSAGE,
    payload:message,
  }
 }

export function setQuiz(formData) { 
  return{
    type:types.SET_QUIZ_INTO_STATE,
    payload:formData
  }
}

export function inputChange(payload) { 
  return {
    type:types.INPUT_CHANGE,
    payload,
  }
}

export function resetForm() { 
  return{
    type: types.RESET_FORM
  }
}

export function resetSelectedAnswer() {
  return {
    type: types.RESET_SELECTED_ANSWER,
  };
}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    console.log('beforfe axios request')
    axios.get('http://localhost:9000/api/quiz/next')
      .then(res => {
        const { quiz_id, question, answers } = res.data;

        if (!quiz_id || !question || !answers) {
          dispatch(setMessage('Invalid format'));
        } else {
          dispatch({
            type: SET_QUIZ_INTO_STATE,
            payload: { quiz_id, question, answers }
          });
        }
      })
      .catch(err => {
        console.error(err.response.data);
        dispatch(setMessage('Error fetching quiz'));
      });
  }
}
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz(formData) {
  return function (dispatch) {
    axios.post('http://localhost:9000/api/quiz/new',formData)
    .then(res => {
      dispatch({
        type:types.SET_QUIZ_INTO_STATE,
        payload:formData
      })
      console.log(res.data)
    }).catch(err => {
      console.log(err,'error')
    })
    
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state



// return function (dispatch) {
//   axios.get('http://localhost:9000/api/quiz/next')
//     .then(res => {
//       dispatch({
//         type: SET_QUIZ_INTO_STATE,
//         payload: {
//           quiz_id: res.data.quiz_id,
//           question: res.data.question,
//           answers: res.data.answers
//         }
//       });
//     })
//     .catch(err => {
//       console.error(err);
//       dispatch(setMessage('Error'));
//     });
// }