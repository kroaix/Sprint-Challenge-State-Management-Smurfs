import React, { useEffect } from "react";
import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';
import "./App.css";
import { getSmurfs, postSmurf } from '../actions';
import { connect } from "react-redux";
import "semantic-ui-css/semantic.min.css";
import { Container } from 'semantic-ui-react';

const App = ({smurfs, getSmurfs, postSmurf }) => {
  useEffect(() => {
    getSmurfs();
  }, [getSmurfs])

  return (
    <div className="App">
      <Container>
        <h1>Smurfs</h1>
        <SmurfForm postSmurf={postSmurf} />
        <SmurfList smurfs={smurfs} />
      </Container>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    gettingSmurfs: state.gettingSmurfs,
    postingSmurf: state.postingSmurf,
    error: state.error
  }
}

export default connect(mapStateToProps, { getSmurfs, postSmurf })(App);