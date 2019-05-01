import React from 'react';
import PropTypes from 'prop-types';
const propTypes ={
    onPlus : PropTypes.func,
    onSubtract : PropTypes.func,
    onRandomizeColor :  PropTypes.func,
};
function   createWarning(functionName ){
    return ()=>console.warn(functionName+' is not defined');
}
const defaultProps = {
    onPlus:()=> createWarning("onPlus"),
    onSubtract:()=> createWarning("onSubtract"),
    onRandomizeColor:()=> createWarning("ononRandomizeColor"),
};

class Control extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
               <button onClick={this.props.onPlus}>+</button>
               <button onClick={this.props.onSubtract}>-</button>
               <button onClick={this.props.onRandomizeColor}>Random</button>
            </div>
        );
    }
}
export default Control;