// ReactDOM.render();

// 1) Import ReactDOM library
import ReactDOM from 'react-dom/client';
import 'materialize-css/dist/css/materialize.min.css';
import reduxThunk from 'redux-thunk';

// 2) Import App component as usual
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// 3) Get a reference to the div with ID root
const el = document.getElementById('root');

// 4) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 5) Show the component on the screen
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
