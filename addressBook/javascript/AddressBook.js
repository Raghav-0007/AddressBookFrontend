const Contact = require('./Contact.js');

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        if (contact instanceof Contact) {
            this.contacts.push(contact);
            console.log("Contact added successfully.");
        } else {
            console.log("Invalid contact object.");
        }
    }

    editContact(firstName, lastName, updatedDetails) {
        let contact = this.contacts.find(c => c.firstName === firstName && c.lastName === lastName);
        if (contact) {
            Object.keys(updatedDetails).forEach(key => {
                if (contact.hasOwnProperty(key) && updatedDetails[key] !== undefined) {
                    contact[key] = updatedDetails[key];
                }
            });
            console.log("Contact updated successfully.");
        } else {
            console.log("Contact not found.");
        }
    }

    displayContacts() {
        if (this.contacts.length === 0) {
            console.log("Address Book is empty.");
        } else {
            console.log("Contacts in Address Book:");
            this.contacts.forEach(contact => console.log(contact.toString()));
        }
    }
}

module.exports = AddressBook;