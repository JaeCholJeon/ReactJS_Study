import React  from 'react';
import ContactInfo from './ContactInfo';
import ContactDetails from  './ContactDetails';
import ContactCreate from  './ContactCreate';
import update from 'react-addons-update';
class Contact extends React.Component{
    constructor(props){
      super (props);
      this.state= {
        selectedKey :-1,
        keyword  : '',
        contactData:[
            { name: "abet",phone:"01010101"},{ name: "abet",phone:"01010101"},
            { name: "bbb",phone:"01010101"},{ name: "abet",phone:"01010101"},
            { name: "abcccet",phone:"01010101"},{ name: "abet",phone:"01010101"},
            { name: "dd",phone:"01010101"},{ name: "abet",phone:"01010101"},    
      ]
    //   constructor 가 생성되고  ,  리로딩 될때 다시 constructor 를 실행하지 않는다
    //   F5 를 눌러 새로고침해야함

      };
      this.handleCreate = this.handleCreate.bind(this);
      this.handleRemove = this.handleRemove.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleClick  = this.handleClick.bind(this);
    }
    handleRemove(){
      if(this.state.selectedKey<0){
        return;
      }
      this.setState(
        {
          contactData:update(this.state.contactData,{
            $splice:[[this.state.selectedKey]]
          }),
          selectedKey:-1
        }
      );
    }
    handleCreate(contact){
      this.setState({
        contactData:update(this.state.contactData,{$push:[contact]})
      });
    }
    handleChange(e){
        // e는 이벤트 객체
        this.setState({
            keyword  :e.target.value
        });
    }
    handleClick(key){
        this.setState({
            selectedKey :key
        });
    }
    render (){
      const mapToComponent = (data)=>{
          data.sort();  
          data = data.filter(
              (contact)=>{
                  return contact.name.toLowerCase().indexOf(this.state.keyword.toLowerCase())>-1;
              }
          );    
        return data.map((contact,i)=>{
          return (<ContactInfo contact={contact} key={i}
            onClick={()=>{
                this.handleClick(i);
            }}
          />);
        //   props로 전달되기 때문에 Component에는 onclick 이 되지않음
        //  상위 ContactInfo에 this.props.onClick 을 적용
        });
      };
      return (
        <div>
            <h1>Contacts</h1>
            <input 
            name="keyword"
              placeholder="Search"
              value={this.state.keyword}
              onChange={this.handleChange}>
              {/* placeholder 비어있을값 */}
            </input>
          {mapToComponent(this.state.contactData)}
          <ContactDetails isSelected={this.state.selectedKey!==-1}
          contact={this.state.contactData[this.state.selectedKey]}
          onRemove={this.handleRemove}
          />
          <ContactCreate
          onCreate={this.handleCreate} />
          </div>
      );
    }
  }
  export default Contact;