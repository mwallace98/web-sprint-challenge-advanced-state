import React, { useState,useEffect}from 'react'
import { connect ,useDispatch} from 'react-redux'
import * as actionCreators from '../state/action-creators'



export function Form(props) {

  
 const {inputChange,setMessage,resetForm,form} = props;
 
 const dispatch = useDispatch()


console.log(resetForm)


  const onChange = evt => {
    const{id,value} = evt.target
    dispatch(actionCreators.inputChange({id,value}))
  }

  const onSubmit = evt => {
    console.log('submit')
    evt.preventDefault()
    
    dispatch(setMessage(`Congrats: "${form.newQuestion}" is a great question!`))
    dispatch(resetForm())

    }
  

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" value={form.newQuestion}/>
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" value={form.newTrueAnswer} />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" value={form.newFalseAnswer}/>
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}



export default connect((state) => ({form:state.form}), actionCreators)(Form)
