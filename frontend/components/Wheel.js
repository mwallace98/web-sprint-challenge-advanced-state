import React,{useState} from 'react'
import { useDispatch,connect,useSelector } from 'react-redux'
import { moveClockwise, moveCounterClockwise } from '../state/action-creators'
import * as actionCreators from '../state/action-creators'

//this is connetced to the store

export function Wheel(props) {

  
  const dispatch = useDispatch()

  const wheelState = useSelector((state) => state.wheel)

  const handleClockwise = () => {
   console.log('clockwise button')
   dispatch(moveClockwise())
  }
  
  const handleCounterClockwise = () => {
    console.log('counter clockwise button')
    dispatch(moveCounterClockwise())
  }

  return (
    <div id="wrapper">
       <div id="wheel">
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <div
            key={index}
            className={`cog${index === wheelState ? ' active' : ''}`}
            style={{ "--i": index }}
          ></div>
        ))}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={handleCounterClockwise}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={handleClockwise}>Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
  quiz:state.quiz,
  form:state.form,
  selectedAnswer: state.selectedAnswer,
  infoMessage:state.infoMessage,
  newQuestion:state.form.newQuestion
  }
};
export default connect(mapStateToProps,actionCreators)(Wheel)