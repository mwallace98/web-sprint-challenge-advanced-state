import React, { useState,useEffect}from 'react'
import { connect ,useDispatch} from 'react-redux'
import * as actionCreators from '../state/action-creators'



export function Form(props) {

  
 const {inputChange,setMessage} = props;
 
 const dispatch = useDispatch()

 const [formData, setFormData] = useState({
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
});




  const onChange = evt => {
    const{id,value} = evt.target
    setFormData((prevData) => ({
      ...prevData,
      [id]:value,
    }))
  }

  const onSubmit = evt => {
    evt.preventDefault()
    inputChange(formData);
    dispatch(setMessage(`Congrats: ${formData.newQuestion} is a great question!`))
    }
  

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
