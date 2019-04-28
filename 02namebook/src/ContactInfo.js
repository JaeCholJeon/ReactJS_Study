import React from 'react';
 class ContactInfo extends  React.Component{
    render (){
      return  (
        <div onClick={this.props.onClick}>
          {this.props.contact.name}
          {/* {this.props.contact.phone} */}
          {this.props.keys}
          </div>
      );
    }
  }
export default ContactInfo;