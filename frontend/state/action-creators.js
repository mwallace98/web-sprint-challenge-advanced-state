// ❗ You don't need to add extra action creators to achieve MVP

import { MOVE_CLOCKWISE } from "./action-types"
import * as types from './action-types'
import axios from "axios"



export function moveClockwise() { 
  return {
    type:types.MOVE_CLOCKWISE,
  }
}

export function moveCounterClockwise() { }

export function selectAnswer() { }

export function setMessage(message) {
  return{
    type: types.SET_INFO_MESSAGE,
    payload:message
  }
 }

export function setQuiz() { 
  
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

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {

    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
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
    return {
      type:types.SET_QUIZ_INTO_STATE,
      payload:formData
    }
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
