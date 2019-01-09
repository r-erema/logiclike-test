import React from 'react';
import ReactDOM from 'react-dom';
import {loadState, saveState} from './utils/stateIO';

import Header from './components/Header.jsx'
import AddContactControl from './components/AddContactControl.jsx'
import ContactsList from './components/ContactsList.jsx'
import uniqid from "uniqid";

class PhoneBookApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = loadState();
    }

    componentDidMount() {
        this.setState({showList: true});
    }

    handleContactAdd(contact) {
        let contacts = this.state.contacts;
        contact['id'] = uniqid();
        contacts.push(contact);
        this.setState({contacts: contacts});
        saveState(this.state);
    }

    handleContactUpdate(updatedContact) {
        let contacts = this.state.contacts;
        let i = contacts.findIndex((contact) => {return contact.id === updatedContact.id;});
        contacts[i] = updatedContact;
        this.setState({contacts: contacts});
        saveState(this.state);
    }

    handleContactRemove(contactToRemove) {
        let contacts = this.state.contacts;
        let i = contacts.findIndex((contact) => {return contact.id === contactToRemove.id;});
        contacts.splice(i, 1);
        this.setState({contacts: contacts});
        saveState(this.state);
    }

    render() {
        return (
            <div>
                <Header />
                <AddContactControl onContactAdd={this.handleContactAdd.bind(this)} />
                <ContactsList
                    contacts={this.state.contacts}
                    onContactUpdate={this.handleContactUpdate.bind(this)}
                    onFormDisplaySwitchButtonClick={() => {this.setState({showList: false});}}
                    onRemoveButtonClick={this.handleContactRemove.bind(this)}
                    showList={this.state.showList}
                />
            </div>
        );
    };
}


ReactDOM.render(
    <PhoneBookApp />,
    document.getElementById('mount-point')
);