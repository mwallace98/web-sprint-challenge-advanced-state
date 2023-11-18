import React, { useState,useEffect}from 'react'
import { connect ,useDispatch} from 'react-redux'
import * as actionCreators from '../state/action-creators'
import { SET_INFO_MESSAGE } from '../state/action-types';



export function Form(props) {

  
 const {setMessage,resetForm,form,fetchQuiz,quiz,setQuiz,postAnswer,inputChange,infoMessage} = props;
 console.log(infoMessage)
  
 

 
 const dispatch = useDispatch()

 const isSubmitDisabled = !form.newQuestion.trim() || !form.newTrueAnswer.trim() || !form.newFalseAnswer.trim() || 
 form.newQuestion.trim().length < 2 || form.newTrueAnswer.trim().length < 2 || form.newFalseAnswer.trim().length < 2;
 

  const onChange = evt => {
    const{id,value} = evt.target
    dispatch(inputChange({id,value}))
  }

  const onSubmit = evt => {
    evt.preventDefault()
    
    }
  

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" value={form.newQuestion}/>
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" value={form.newTrueAnswer} />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" value={form.newFalseAnswer}/>
      <button id="submitNewQuizBtn"disabled={isSubmitDisabled}>Submit new quiz</button>
    </form>
  )
}

const mapStateToProps = (state) => {
  return{
  quiz:state.quiz,
  form:state.form,
  selectedAnswer: state.selectedAnswer,
  infoMessage:state.infoMessage,
  newQuestion:state.newQuestion
  }
};

export default connect(mapStateToProps, actionCreators)(Form)
