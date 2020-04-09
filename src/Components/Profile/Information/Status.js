import React from "react";
import classes from "./Information.module.css";

export default class Status extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: this.props.text,
            visible: false
        }
    }

    onInputChange = (e) => {
        this.setState({status: e.target.value.slice(0, 30)});
    };
    inputKeyDown = event => {
        if(event.key === "Enter") this.setState({visible: false})
    };

    render() {
        return <li>
            <span
                placeholder="Введите статус"
                className={classes.status}
                onClick={() => this.setState({visible: true})}>
                {this.state.status || "Change status"}
            </span>
            <div>
                {this.state.visible
                && <input type="text"
                          value={this.state.status}
                          onChange={this.onInputChange}
                          onBlur={() => this.setState({visible: false})}
                          onKeyDown={this.inputKeyDown}
                          autoFocus
                />}
            </div>
        </li>
    }
}