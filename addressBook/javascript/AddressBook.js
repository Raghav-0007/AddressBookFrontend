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

    deleteContact(firstName, lastName) {
        let initialLength = this.contacts.length;
        this.contacts = this.contacts.filter(c => !(c.firstName === firstName && c.lastName === lastName));

        if (this.contacts.length < initialLength) {
            console.log("Contact deleted successfully.");
        } else {
            console.log("Contact not found.");
        }
    }

    countContacts() {
        let count = this.contacts.reduce((acc, _) => acc + 1, 0);
        console.log(`Total contacts in Address Book: ${count}`);
        return count;
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