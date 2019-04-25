import React, { Component, PropTypes } from 'react';

class NoiDung extends Component {
    constructor(props) {
        super(props);
        
    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {
    	return false;
    }



        render() {
        return (
            <h4>{this.props.ten}</h4>
        );
    }
}

export default NoiDung;
