import React from 'react';
import { Provider } from 'react-redux';

import configStore from './store';
import Layout from './components/Layout';

const store = configStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Layout />
      </Provider>
    </div>
  );
}

export default App;
