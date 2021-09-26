import React from 'react'
import { connect } from 'react-redux'
import { fetchTodo } from 'ActionsReducers/todo'

export class ListTodo extends React.Component {
  constructor(props) {
    super(props)
    props.fetchTodo()
  }

  render() {
    return <div>
      <h2>List Todo</h2>
      {/* <pre>{JSON.stringify(this.props, null, 2)}</pre> */}
      <ul>
        {this.props.todo.data.map((t, i) => <li key={i}>{t.taskName}</li>)}
      </ul>
    </div>
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    todo: state.todo
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchTodo: (...f) => dispatch(fetchTodo(...f))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListTodo)
