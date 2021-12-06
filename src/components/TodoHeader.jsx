import React, { Component } from 'react'

export default class TodoHeader extends Component {

  // static defaultProps = {
  //   title:'待办事项',
  //   subtitle:'ToDoList...'
  // }

  render() {
    // const children = this.props.children
    const { title, subtitle} = this.props
    return (
        <section className="hero is-primary">
          <div className="hero-body">
            <p className="title">
                {title}
            </p>
            {
              typeof subtitle === 'string'
              ?
              (
                <p className='subtitle'>
                  {subtitle}
                </p>
              )
              :
              subtitle()
            }
            {/* {
              children
              ?
              children
              :
              (
                <>
                  <p className="title">
                    待办事项列表
                  </p>
                  <p className="subtitle">
                    TodoList...
                  </p>
                </>
              )
            } */}
          </div>
        </section>
    )
  }
}
