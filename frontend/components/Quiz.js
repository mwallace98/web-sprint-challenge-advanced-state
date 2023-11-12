import React, {useEffect} from 'react'
import { connect,useDispatch } from 'react-redux'
import * as actionCreators from '../state/action-creators'




export function Quiz(props) {
  const {fetchQuiz,quiz,selectedAnswer,selectAnswer}= props 
  const dispatch = useDispatch()
  
  
  console.log(quiz,'quiz')
  useEffect(() => {
    fetchQuiz();
  },[fetchQuiz])

  const handleSubmitQuiz = () => {
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
              <div key={answer.answer_id}  className={selectedAnswer === answer ? 'selected' : ''}>
                {answer.text} 
                
                <button onClick={() => selectAnswer(answer)} >
                {selectedAnswer === answer ? 'SELECTED' : 'Select'}
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
  console.log(state,'state')
  return{
  quiz:state.quiz,
  selectedAnswer: state.selectedAnswer
  }
};



export default connect(mapStateToProps,actionCreators)(Quiz)

