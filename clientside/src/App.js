import React from 'react'
import './App.css';
import { store } from './actions/store'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import ChangeButton from './components/ChangeButton';


function App() {
  return (
    <Provider store={store}>
      <Container>
        <h1>Classificados</h1><br />
        <ChangeButton /><br />
      </Container>
    </Provider>
  );
}

export default App;
