import React, { useReducer } from 'react';
import { connect } from 'react-redux';
import { ERASE_MESSAGE } from './reducers/message-reducer';

const Banner = ({ state, eraseBanner }) => {

  const handleClose = (e) => {
    eraseBanner();
  }
  return (
    <div className="message">
      {
        state.type ? <>
          <div className={state.type}>
            <span>{state.message}</span>
            <span className="close" onClick={handleClose}>✘</span>
          </div>
        </> : null}
    </div>
  )
}

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = (dispatch) => ({
  eraseBanner: () => {
    dispatch({
      type: ERASE_MESSAGE,
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Banner);