import React, { Component } from 'react';
import Todo from './Todo';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: "",
            todos: [],
            count: 0
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnchange = this.handleOnchange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleOnchange(event) {
        this.setState({ comment: event.target.value });
    }

    handleSubmit(event) {
        if (this.state.comment === "") {
        } else {
            this.setState({ todos: this.state.todos.concat(this.state.comment) });
        }
        this.setState({ comment: "" });

        this.setState({ count: this.state.count + 1 });

        event.preventDefault();
    }

    handleRemove(i) {
        this.state.todos.splice(i, 1);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="form1" value={this.state.comment} onChange={this.handleOnchange} />
                    <input type="submit" value="Submit" />
                </form>
                <Todo array={this.state.todos} handleRemove={this.handleRemove} />
            </div>
        )
    }
}

export default Form;