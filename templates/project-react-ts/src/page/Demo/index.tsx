import { observer } from 'mobx-react-lite'
import React from 'react'
import * as store from './store'
import { Button } from 'antd'
import { router } from 'src/router'

const Demo: React.FC = observer(props => {
  console.log(router.location.pathname, 99)
  return (
    <div className="content">
      <h1>Demo: {store.count.value}</h1>
      <Button onClick={() => store.count.set(store.count.value + 1)}>+1</Button>
      <Button onClick={() => {
        router.push('/Demo1')
      }}>go demo1</Button>
    </div>
  )
})

export { Demo as default }
