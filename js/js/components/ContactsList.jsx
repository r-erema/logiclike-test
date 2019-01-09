import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem.jsx';

class ContactsList extends React.Component {

    render() {
        return (
            <ul>
                {this.props.contacts.map(contact => (
                    <ContactItem
                        onContactUpdate={this.props.onContactUpdate}
                        key={contact.id}
                        contact={contact}
                        onFormDisplaySwitchButtonClick={this.props.onFormDisplaySwitchButtonClick}
                        onRemoveButtonClick={this.props.onRemoveButtonClick}
                    />
                ))}
            </ul>
        );
    }
}

ContactsList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onFormDisplaySwitchButtonClick: PropTypes.func.isRequired,
    onRemoveButtonClick: PropTypes.func.isRequired
};

export default ContactsList;