import React from "react";

export default class Store extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            appName : "Weather App"
        }
    }

    render() {
        return React.Children.map(this.componentWillReceiveProps.children, (child) => {
            React.cloneElement(child, {...this.state});
        })
    }
} 