import { observer } from 'mobx-react-lite'
import React from 'react'
import * as store from './store'
import { Button } from 'antd'

const Demo: React.FC = observer(props => (
  <div className="content">
    <h1>{store.count.value}</h1>
    <Button onClick={() => store.count.set(store.count.value + 1)}>+1</Button>
  </div>
))

export { Demo as default }
