import React from 'react'
import ReactDOM from 'react-dom'

//Redux stuff
import {createStore} from 'redux'
import {Provider} from 'react-redux'

//Reducer
import rootReducer from './store/reducers'

import './index.css'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'

//Store creation
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
registerServiceWorker()
