import React, { Component } from 'react';
import './App.css';
import  InputBox  from "./Components/InputBox";
import  List  from "./Components/List";
import  Button  from "./Components/Button";


//TODO Is refs the best way to be doing things?
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items : []
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    componentWillMount() {
        fetch('http://localhost:3001/list/', {
        headers: {
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(response => {
            this.setState({
                items: response
            });
        });
    }

    handleClick() {
        fetch('http://localhost:3001/list/', {
            headers: {
                "Access-Control-Allow-Credentials": true,
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                "name": this.refs.box.refs.box.value,
                "checked": "false"
            })
        }).then(fetch('http://localhost:3001/list/', {
            headers: {
                "Access-Control-Allow-Credentials": true,
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(response => {
                this.setState({
                    items: response
                });
            }))
    }

    handleRemove(e) {
        fetch('http://localhost:3001/list/' + e._id, {
            headers: {
                "Access-Control-Allow-Credentials": true,
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            method: "DELETE",
            body: e,
        })

        this.refs.list.forceUpdate();
    }

  render() {
    return (
      <div className="App">
        <h1>Grocery List</h1>
        <List ref="list" input={this.state.items} handleRemove={this.handleRemove}/>
        <InputBox ref="box"/>
        <Button handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;