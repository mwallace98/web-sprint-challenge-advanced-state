// ❗ You don't need to add extra action creators to achieve MVP

import { MOVE_CLOCKWISE,SET_QUIZ_INTO_STATE,SET_SELECTED_ANSWER,SET_INFO_MESSAGE,RESET_FORM} from "./action-types"
import * as types from './action-types'
import axios from "axios"





export function moveClockwise() { 
  return {
    type:types.MOVE_CLOCKWISE,   
  }
}

export function moveCounterClockwise() { }

export function selectAnswer(answer) { 
  
  
  const {answer_id} = answer;
  console.log(answer_id)

  return{
    type: SET_SELECTED_ANSWER,
    payload:
      answer_id,
    
  }
}

export function setMessage(message) {
  return{
    type: SET_INFO_MESSAGE,
    payload:message
  }
 }

export function setQuiz(quizData) { 
  return{
    type:types.SET_QUIZ_INTO_STATE,
    payload: quizData
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

// ❗ Async action creators
export function fetchQuiz() {
    return async function (dispatch) {
      
      try { 
        const res = await axios.get('http://localhost:9000/api/quiz/next');
        const quizData =  {
            quiz_id: res.data.quiz_id,
            question: res.data.question,
            answers: res.data.answers
        };
        dispatch({
          type:SET_QUIZ_INTO_STATE,
          payload:quizData
        });
      } catch (err) {
        console.log(err);
      }
    };
}
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  
export function postAnswer(newQuiz,newQuestion,initialFormState) {
  return async function (dispatch) {}
}
export function postQuiz(quizData) {
    return async function (dispatch) {}
      
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
}