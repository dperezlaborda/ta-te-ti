import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Juego from './components/Juego';
//import App from './App';
//import { render } from '@testing-library/react';
//import reportWebVitals from './reportWebVitals';

class Index extends Component{
  render(){
    return(
      <Fragment>
        <Juego />
      </Fragment>
    )
  }
}

render(
  <Index/>,
  document.getElementById('root')
)

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
