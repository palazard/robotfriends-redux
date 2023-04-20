import React, { Component } from "react";

class ErrorBundary extends Component {
    constructor (){
        super();
        this.state={
            errorComponent : false,
        };
    }

    componentDidCatch(){
        this.setState({errorComponent: true});
    }

    render(){
        if (this.state.errorComponent){
            return(
                <div>
                    <h1>Oups, there is an error here...</h1>
                </div>
            )
        } else {
            return this.props.children
        }
    }

}

export default ErrorBundary;