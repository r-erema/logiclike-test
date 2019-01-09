import React from 'react';
import PropTypes from 'prop-types';

class AddContactControl extends React.Component {

    handleSubmit(e) {
        e.preventDefault();
        this.props.onContactAdd({name: this.refs.name.value, phone: this.refs.phone.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" placeholder="Name" ref="name" required  />
                <input type="tel" placeholder="Phone" ref="phone" required />
                <button type="submit" >Add contact</button>
            </form>
        );
    }
}

AddContactControl.propTypes = {
    onContactAdd: PropTypes.func.isRequired,
};

export default AddContactControl;