import React, { Component } from 'react'
import TodoHeader from './components/TodoHeader'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import { Provider } from './utils'
let index = 7


export default class APP extends Component {
  state={
    todos:new Array(6).fill(null).map((curr,index) => ({
      id:index+1,
      title:'待办事项'+(index+1),
      completed:false
    }))
  }
  // 添加新待办事项
  addTodoItem = title => {
    // 要修改state中的数据 必须调用setstate（）方法 才有响应式渲染效果
    this.setState({
      todos:[
        ...this.state.todos,
        {
          id:index++,
          title,
          complted:false
        }
      ]
    })
  }

  // 修改完成状态
  toggleTodoList =id => {
    this.setState({
      todos:this.state.todos.map(todo => {
        const copy = { ...todo }
        if(copy.id === id){
          copy.completed =! todo.completed
        }
        return copy
      })
    })
  }

  removeTodoItem = id => {
    this.setState({
      todos:this.state.todos.filter(todo =>todo.id !== id)
    })
  }

  render() {
    return (
      <Provider value={{
        todos:this.state.todos,
        add:this.addTodoItem,
        toggle:this.toggleTodoList,
        remove:this.removeTodoItem
      }}>
          <TodoHeader title='待办事项列表！！' subtitle={()=>{
            <h2>这是自定义的副标题</h2>
          }}>
            <h1 className='title'>主标题</h1>
            <h1 className='subtitle'>副标题</h1>
          </TodoHeader>

          <TodoInput/>

          <TodoList/>
      </Provider>
    )
  }
}

