import React from 'react'
import { connect } from 'react-redux'

import { addTodo } from 'ActionsReducers/todo'

export class AddTodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            taskName: ""
        }

        this.onChangeTaskName = this.onChangeTaskName.bind(this)
        this.onAddTodoClick = this.onAddTodoClick.bind(this)
    }

    onChangeTaskName(e) {
        this.setState({
            taskName: e.target.value
        })
    }

    onAddTodoClick() {
        this.props.addTodo({
            "taskName": this.state.taskName
        })
        this.setState({
            taskName: ""
        })
    }

    render() {
        return <div>
            <h2>Add Todo</h2>
            <input onChange={this.onChangeTaskName} value={this.state.taskName} />
            <button onClick={this.onAddTodoClick}>
                Add Todo
            </button>
        </div>
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
    addTodo: (...t) => dispatch(addTodo(...t))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
