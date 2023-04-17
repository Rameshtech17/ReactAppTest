import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
// import List from './components/pageList';
import AppRouting from './Routing/Routing';
function App() {
  return (
    <>
      <Provider store={store}>
        <AppRouting />
      </Provider>
    </>
  );
}

export default App;
