import React, { useReducer } from 'react';
import { connect } from 'react-redux';

const Banner = ({ state }) => {
  return (
    <div className="message">
      {state.type ? <span className={state.type}>{state.message}</span> : null}
    </div>
  )
}

const mapStateToProps = (state) => ({
  state
})

export default connect(mapStateToProps, null)(Banner);