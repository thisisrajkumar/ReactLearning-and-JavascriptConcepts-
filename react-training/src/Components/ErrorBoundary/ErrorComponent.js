import React, { Component } from 'react';
export default class ErrorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }
    componentDidCatch(error) {
        console.log(error)
    }
    render() {
        console.log(this.props)
        if (this.state.hasError) {
            return <h1>Something went wrong</h1>
        }
        return this.props.children;
    }
}