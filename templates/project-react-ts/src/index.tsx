/* eslint-disable no-underscore-dangle */
import { createRoot } from 'react-dom/client'
import { configure } from 'mobx'
import { App } from 'component/App'

import './style/index.css'
import './style/app.less'

configure({
  isolateGlobalState: true,
})

const root = createRoot(document.querySelector('#app')!)
root.render(<App />)
