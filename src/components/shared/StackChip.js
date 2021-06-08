import { string } from "prop-types";
import React, { Component } from 'react';

class StackChip extends React.Component {
    
    constructor(props) {
        super(props);
        this.stackToList = this.stackToList.bind(this);
        this.state = {
            stackClass: this.props.stack.toLowerCase().split(" ").join("") + " chip",
            stackStringArray: this.stackToList(this.props.stack)
        }
    }

    stackToList(s) {
        let stringArray = []
        for(let i = 0; i < s.length; i++){
            if (s[i] === " ") {
                stringArray.push({letter: " ", index: i, class: "space"});
            } else {
                stringArray.push({letter: s[i], index: i});
            }
        }
        return stringArray;
    }

    render() {
        return (
            <span className={this.state.stackClass}>
                {this.state.stackStringArray && this.state.stackStringArray.map(c => <span key={c.index} className={c.class ? c.class : ''}>{c.letter}</span>)}
            </span>
        )
    }

}

export default StackChip