import React, {useEffect} from 'react'
import { connect,useDispatch } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import axios from 'axios'



export function Quiz(props) {
  const {
    fetchQuiz,
    resetSelectedAnswer,
    quiz,
    selectedAnswer,
    selectAnswer,
    setMessage,
    infoMessage,
    formData,
     }= props 
  const dispatch = useDispatch()

  

  
  useEffect(() => {
    fetchQuiz();
  },[fetchQuiz])

  

  const handleSubmitQuiz = () => {
    
    dispatch(setMessage('test'))
    dispatch(resetSelectedAnswer())
    dispatch(fetchQuiz())
    
    
    
}
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz ? (
          <>
            <h2>{quiz.question}</h2>

           

            <div id="quizAnswers">
            {quiz.answers.map((answer) => (
              <div key={answer.answer_id}  className={selectedAnswer === answer.answer_id ? 'selected' : ''}>
                {answer.text} 

                <button onClick={() => selectAnswer(answer.answer_id)} >
                {selectedAnswer === answer.answer_id ? 'SELECTED' : 'Select'}
                </button>
              </div>
              
            ))}
            
          </div>
              <button id="submitAnswerBtn" onClick={handleSubmitQuiz} disabled={!selectedAnswer}>
              Submit answer
            </button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    quiz:state.quiz,
    selectedAnswer: state.selectedAnswer,
    infoMessage:state.infoMessage
  }
};



export default connect(mapStateToProps,actionCreators)(Quiz)

