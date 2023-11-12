import React from 'react'
import { connect } from 'react-redux';



export function Message(props) {
  console.log(props,'message props')
  return <div id="message">{props.infoMessage}</div>
}
const mapStateToProps = (state) => ({
  infoMessage:state.infoMessage,
});

 export default connect(mapStateToProps)(Message)

 // am getting info message from props, need to update info message in state somehow now.