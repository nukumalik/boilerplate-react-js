import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import pages from 'pages'

// Store
import store from 'store'

// Components
import Main from 'layouts/Main'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Main>
          <Switch>
            {pages.map(page => (
              <Route key={page.path} {...page} exact />
            ))}
          </Switch>
        </Main>
      </Provider>
    </BrowserRouter>
  )
}

export default App
