import React, { Component, createRef } from 'react'
import {TodoContext} from '../utils'

export default class TodoInput extends Component {
  // 静态属性 与写在类体外得 TodoInput.contextType = TodoContext 等价
  static contextType = TodoContext

  // state状态数据
  state = {
    inputValue:''
  }

  // 创建 Ref 对象
  inputRef=createRef()

  // 渲染 input value 手动双向绑定
  handleChange = event => {
    this.setState({
      inputValue:event.target.value.trim()
    })
  }
  //  添加新待办事项
  handleAdd = event => {
    event?.preventDefault()
    // 输入框自动获得焦点
    this.inputRef.current.focus()
    if(this.state.inputValue===''){
      alert('请输入内容')
      return
    }
    this.context.add(this.state.inputValue)
    this.setState({
      inputValue:''
    })
  }

  // 键盘按下
  handleKeyDown = event => {
    if(event.keyCode===13){
      this.handleAdd()
    }
  }


  render() {
    return (
      <div className='container' style={{marginTop:20}}>
        <div className="field is-grouped">
          <p className="control is-expanded">
            <input
              className="input"
              type="text"
              placeholder="请输入待办事项..."
              value={ this.state.inputValue }
              onChange={this.handleChange}
              ref={this.inputRef}
              onKeyDown={this.handleKeyDown}
            />
          </p>
          <p className="control">
            <a className="button is-info" href='/' onClick={this.handleAdd}>
              提交
            </a>
          </p>
        </div>
      </div>
    )
  }
}
