import React from 'react';
import Contact from './Contact';

export default class  ContactDetails extends  React.Component{

    render(){
        const details=(
        <div>
            <p>{this.props.contact.name}></p>
            <p>{this.props.contact.phone}></p>
            Selected
        </div>);
        const blank=(<div>Not Selected</div>);
        return (
            <div>
                <h1>ContactDetails</h1>
                {this.props.isSelected ? details:blank}
            </div>
        );
    }
}
ContactDetails.defaultProps= {
    contact:{
        name:'',
        phone:''
    }
}
// 없으면 선택한것이 없어서 undefined error 발생한 