import React, { Component } from 'react'
import {TodoContext} from '../utils'

export default class TodoItem extends Component {
  // 静态属性 与写在类体外得 TodoInput.contextType = TodoContext 等价
  static contextType = TodoContext

  // hanleRemove = (id,event) => {
  //   event.preventDefault()
  //   this.context.remove(id)
  // }

  render() {
    const {id, title, completed}=this.props.todo
    return (
      <div className="card">
        <div className="card-content">
          <div className="content">
            {id}-{title}-{completed ? '已' : '未'}完成
          </div>
        </div>
        <footer className="card-footer">
          <a href='/' className="card-footer-item" onClick={e=>{
            e.preventDefault()
            this.context.toggle(id)
          }}>修改状态</a>
          <a href='/' className="card-footer-item" onClick={e=>{
            e.preventDefault()
            this.context.remove(id)
          }}>删除</a>
        </footer>
      </div>
    )
  }
}
