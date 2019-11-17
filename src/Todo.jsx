import React, { Component } from 'react';


class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.array
        };
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.array.map((todo, i) => {
                        return <li key={i}>{todo}<button onClick={() => this.props.handleRemove(i)}>delete</button></li>
                    })}
                </ul>
            </div>
        )
    }

}

export default Todo;