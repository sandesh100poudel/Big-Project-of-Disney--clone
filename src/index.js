import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./app/store";
import {Provider} from "react-redux";
import {useSelector} from "react-redux"

// function IamUsingStore() {
//   const name = useSelector((state) => state.name)
//   return <h1>{name}</h1>
// }

ReactDOM.render(
 <React.StrictMode>
<Provider store={store}>
    <App />
    {/* <IamUsingStore />  */}
    </Provider>
    </React.StrictMode>
 ,
  document.getElementById('root')
);


