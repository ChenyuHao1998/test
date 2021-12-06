import {createContext} from 'react'

// 创建context 对象
const TodoContext = createContext()

// 解构两个组件
const {
  Provider,
  Consumer
} = TodoContext

export {
  TodoContext,
  Provider,
  Consumer
}
