import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 1.2;
  }
  .container{
    width: 100%;
    max-width: 1100px;
    margin: 10px auto;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
`;

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
