import React, { useState } from 'react'
import s from './style.module.scss'

export const MyComponent: React.FC = (props) => {
  const [count, setCount] = useState(0)

  return (
    <div className={s.container}>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
export { MyComponent as default }
