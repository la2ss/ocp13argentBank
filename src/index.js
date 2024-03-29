import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/Routes';
import { Provider } from 'react-redux';
import store from './Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
        <App />
    </Provider>
   
  
);


