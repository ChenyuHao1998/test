import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import { Consumer } from '../utils'

export default class TodoList extends Component {

  // // 静态属性，进行属性验证
  // static propTypes={
  //   todos:PropTypes.array
  // }
  
  // // 静态属性，默认值的设置
  // static defaultProps={
  //   todos:[]
  // }

  render() {
    return (
      <div className="container" style={{marginTop:20}}>
        <div className="tabs">
          <ul>
            <li className="is-active"><a href='/'>全部待办事项</a></li>
            <li><a href='/'>已完成</a></li>
            <li><a href='/'>未完成</a></li>
          </ul>
        </div>

        <Consumer>
          {
            (value)=>{
              return (
                <div className="columns is-multiline is-mobile">
                  {
                      value.todos.map(todo => (
                        <div className="column is-one-quarter" key={todo.id}>
                          <TodoItem todo={todo}/>
                        </div>
                      ))
                    }
                </div>
              )
            }
          }
        </Consumer>

        {/* <div className="columns is-multiline is-mobile">
        {
            this.props.todos.map(todo => (
              <div className="column is-one-quarter" key={todo.id}>
                <TodoItem todo={todo}/>
              </div>
            ))
          }
      </div> */}
      </div>
    )
  }
}
