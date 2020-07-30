import React, { Component } from 'react';

export default class Switcher extends Component{
    render(){
        return(
            <button className="purple" onClick={this.props.toggleTheme}>
                Alterar tema
            </button>
        )
    }
}