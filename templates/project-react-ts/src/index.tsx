/* eslint-disable no-underscore-dangle */
import { render } from 'react-dom'
import microApp from '@micro-zoe/micro-app'
import { configure } from 'mobx'
import Meteor from '@scf/meteor-react'
import { App } from 'component/App'

// import 'antd/dist/antd.less'

import './style/index.css'
import './style/app.less'

configure({
  isolateGlobalState: true,
})

render(<App />, document.querySelector('#app'))
