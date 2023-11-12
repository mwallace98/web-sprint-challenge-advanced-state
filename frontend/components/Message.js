import React from 'react'
import { connect } from 'react-redux';

export function Message(props) {
  return <div id="message">Message</div>
}
const mapStateToProps = (state) => ({
  infoMessage:state.infoMessage,
});

 export default connect(mapStateToProps)(Message)