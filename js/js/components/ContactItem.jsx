import React from 'react';
import PropTypes from 'prop-types';
import FormDisplaySwitchButton from "./FormDisplaySwitchButton.jsx";
import EditContactForm from "./EditContactForm.jsx";
import RemoveButton from "./RemoveButton.jsx";

class ContactItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {showList: true};
    }

    handleContactEdit(updatedContact) {
        this.setState({showList: true});
        this.props.onContactUpdate(updatedContact);
    }

    render() {
        return this.state.showList ? (
            <li>
                <div>Name: {this.props.contact.name} | Phone: {this.props.contact.phone}</div>
                <FormDisplaySwitchButton onFormDisplaySwitchButtonClick={() => {this.setState({showList: false})}} title="edit" />
                <RemoveButton onRemoveButtonClick={() => {this.props.onRemoveButtonClick(this.props.contact)}}  />
            </li>
        ) : (
            <li>
                <EditContactForm onContactEdit={this.handleContactEdit.bind(this)} contact={this.props.contact}/>
                <FormDisplaySwitchButton onFormDisplaySwitchButtonClick={() => {this.setState({showList: true})}} title="cancel" />
            </li>
        );
    }
}

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired,
    onContactUpdate: PropTypes.func.isRequired,
    onFormDisplaySwitchButtonClick: PropTypes.func.isRequired,
    onRemoveButtonClick: PropTypes.func.isRequired
};

export default ContactItem;