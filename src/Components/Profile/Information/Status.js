import React from "react";
import classes from "./Information.module.css";

export default class Status extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: this.props.statusText,
            visible: false
        }
    }

    spanOnClick = e => {
        if (this.props.userId !== "7024")  return;
        this.setState({visible: true})
    };

    onInputChange = (e) => {
        this.setState({status: e.target.value.slice(0, 30)});
    };

    inputKeyDown = event => {
        if(event.key === "Enter") this.inputOnBlur()
    };

    inputOnBlur = () => {
        this.setState({visible: false});
        this.props.setStatus(this.state.status)
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.statusText !== prevProps.statusText) {
            this.setState({status: this.props.statusText})
        }
    }

    render() {
        return <li>
            <span
                placeholder="Введите статус"
                className={classes.status}
                onClick={this.spanOnClick}>
                {this.state.status || "Change status"}
            </span>
            <div>
                {this.state.visible
                && <input type="text"
                          value={this.state.status}
                          onChange={this.onInputChange}
                          onBlur={this.inputOnBlur}
                          onKeyDown={this.inputKeyDown}
                          autoFocus
                />}
            </div>
        </li>
    }
}