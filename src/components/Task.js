import React, { Component } from 'react';

class Task extends Component {
    render() {
        const {task} = this.props;
        return <div> 
            {task.titulo}-
            {task.description}-
            {task.done}
            <input type="checkbox"/>
            <button>x</button>
        </div>
    }
}

export default Task;