import React from 'react';
import PropTypes from 'prop-types';

class EditContactForm extends React.Component {

    constructor(props) {
        super(props);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onContactEdit({id: this.props.contact.id, name: this.refs.name.value, phone: this.refs.phone.value});
    }

    render() {
        return <form onSubmit={this.handleSubmit.bind(this)}>
                <label htmlFor="name">Name: </label>
                <input type="text" placeholder="Name" ref="name" id="name" required defaultValue={this.props.contact.name} />
                <label htmlFor="phone">Phone: </label>
                <input type="tel" placeholder="Phone" ref="phone" id="phone" required defaultValue={this.props.contact.phone} />
                <button type="submit" >Edit contact</button>
               </form>
    }
}

EditContactForm.propTypes = {
    contact: PropTypes.object.isRequired,
    onContactEdit: PropTypes.func.isRequired
};

export default EditContactForm;