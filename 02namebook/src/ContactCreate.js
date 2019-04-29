import React from 'react';
export default class ContactCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const contact = {
            name: this.state.name,
            phone: this.state.phone
        }
        this.props.onCreate(contact);
        this.setState({
            name: '',
            phone: ''
        });
    }
    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    render() {
        return (
            <div>
                <h2> Create Contact</h2>
                <p>
                    <input
                        types='text'
                        name="name"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input
                        types='phone'
                        name='phone'
                        placeholder="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                    />
                </p>
                <button onClick={this.handleClick}>Create</button>
            </div>
        );
    }
}
ContactCreate.defaultProps = {
    onCreate: () => {
        console.error('onCreate not defined');
    }
}
ContactCreate.propTypes = {
    // onCreate : React.PropTypes.func
}