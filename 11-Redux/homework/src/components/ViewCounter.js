import { func } from 'prop-types';
import React from 'react'
import { connect } from 'react-redux'

function ViewCounter(props) {
  return (
    <div>Clickeado: {props.count} veces</div>
  )
}

function mapStateToProps(state) { 
    return {
        count: state.count,
    };
}

export default connect(mapStateToProps,null) (ViewCounter);