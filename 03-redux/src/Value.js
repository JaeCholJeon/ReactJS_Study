import React from 'react';
import PropTypes from 'prop-types';
const propTypes ={
    number:PropTypes.number
};
const defaultProps = {
    number:1
};
class Value extends React.Component {    
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>{this.props.number}</h1>
            </div>
        );
    }
}
export default Value;