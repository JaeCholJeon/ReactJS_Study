import React from 'react';
import Contact from './Contact';
export default class ContactDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            name: '',
            phone: '',
        }
        this.handleToggle = this.handleToggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    handleEdit() {
        this.props.onEdit(
            this.state.name,
            this.state.phone
        );
    }
    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    handleToggle() {
        if (!this.state.isEdit) {
            this.setState({
                name: this.props.contact.name,
                phone: this.props.contact.phone
            });
        }else{
            this.handleEdit ();
        }
        this.setState({
            isEdit: !this.state.isEdit,
        });
        //setState 비동기
    }
    render() {
        const details = (
            <div>
                <h1>Details</h1>
                <p>{this.props.contact.name}></p>
                <p>{this.props.contact.phone}></p>
            </div>);
        const edit =
            (
                <div>
                    <p>
                        <input
                            types='text'
                            name="name"
                            placeholder="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </p>
                    <p>
                        <input
                            types='phone'
                            name='phone'
                            placeholder="phone"
                            value={this.state.phone}
                            onChange={this.handleChange}
                        />
                    </p>
                </div>
            )
        const view = this.state.isEdit ? edit : details;
        const blank = (<div>Not Selected</div>);
        return (
            <div>
                <h1>ContactDetails</h1>
                {this.props.isSelected ? view : blank}
                <p>
                    <button onClick={this.handleToggle} >
                        {this.state.isEdit ? "OK" : "Edit"}
                    </button>
                    <button onClick={this.props.onRemove}>Remove</button>
                </p>

            </div>
        );
    }
}
ContactDetails.defaultProps = {
    contact: {
        name: '',
        phone: ''
    },
    onRemove: () => {
        console.error('onRemove  is not defined');
    },
    onEdit:()=>{
        console.error('onEdit  is not defined');
    }
}

// 없으면 선택한것이 없어서 undefined error 발생한