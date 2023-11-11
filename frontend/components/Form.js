import React, { useState}from 'react'
import { connect ,useDispatch} from 'react-redux'
import * as actionCreators from '../state/action-creators'
import axios from 'axios'


export function Form(props) {
  
 const {setQuiz} = props;
 const dispatch = useDispatch()

 const [formData, setFormData] = useState({
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
});

  const onChange = evt => {
    const{id,value} = evt.target
    console.log(id,'ID',evt.target.value,'evt.target.value')
    console.log(props)
    
    setFormData((prevData) => ({
      ...prevData,
      [id]:value,
    }))
  }

  const onSubmit = evt => {
    evt.preventDefault()

    dispatch(setQuiz(formData));

    axios.post('http://localhost:9000/api/quiz/new',formData)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
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
