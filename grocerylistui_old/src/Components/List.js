import React, { Component } from 'react';

export default class List extends Component {
    render() {
        return (
            <ul id="list">
                {this.props.input.map(item =>
                    <div key={item._id + "div"}>
                        <input type="radio"></input>
                        <li className="item" id="Listitem" key={item._id}>{item.name}</li>
                        <button onClick={() => this.props.handleRemove(item)} className="item" key={item._id + "btn"}>Remove</button>
                    </div>)}
            </ul>
        )
    }
}