import React from 'react';
import Control from './Control';
import Value from './Value';

const propTypes ={
    
};
const defaultProps = {
    
};
class Counter extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
               <Value>
               </Value>
               <Control/>
            </div>
        );
    }
}
export default Counter;