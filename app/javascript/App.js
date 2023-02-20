import React from 'react'
import Greeting from './Greeting'
import store from './redux/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
      <Provider store={store}>
          <Greeting />
      </Provider>
  )
}

export default App;