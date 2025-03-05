const Contact = require('./Contact.js');

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        if (!(contact instanceof Contact)) {
            console.log("Invalid contact object.");
            return;
        }

        let isDuplicate = this.contacts.some(c => c.firstName === contact.firstName && c.lastName === contact.lastName);

        if (isDuplicate) {
            console.log("Duplicate contact found. Cannot add.");
        } else {
            this.contacts.push(contact);
            console.log("Contact added successfully.");
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

    searchByCityOrState(location) {
        let foundContacts = this.contacts.filter(c => c.city === location || c.state === location);

        if (foundContacts.length === 0) {
            console.log(`No contacts found in ${location}.`);
        } else {
            console.log(`Contacts in ${location}:`);
            foundContacts.forEach(contact => console.log(contact.toString()));
        }
    }

    viewPersonsByCityOrState() {
        let groupedByCity = {};
        let groupedByState = {};

        this.contacts.forEach(contact => {
            if (!groupedByCity[contact.city]) {
                groupedByCity[contact.city] = [];
            }
            groupedByCity[contact.city].push(contact.toString());

            if (!groupedByState[contact.state]) {
                groupedByState[contact.state] = [];
            }
            groupedByState[contact.state].push(contact.toString());
        });

        console.log("\nContacts grouped by City:");
        Object.entries(groupedByCity).forEach(([city, contacts]) => {
            console.log(`\nCity: ${city}`);
            contacts.forEach(contact => console.log(contact));
        });

        console.log("\nContacts grouped by State:");
        Object.entries(groupedByState).forEach(([state, contacts]) => {
            console.log(`\nState: ${state}`);
            contacts.forEach(contact => console.log(contact));
        });
    }

    countContactsByCityOrState() {
        let cityCount = this.contacts.reduce((acc, contact) => {
            acc[contact.city] = (acc[contact.city] || 0) + 1;
            return acc;
        }, {});

        let stateCount = this.contacts.reduce((acc, contact) => {
            acc[contact.state] = (acc[contact.state] || 0) + 1;
            return acc;
        }, {});

        console.log("\nCount of Contacts by City:");
        Object.entries(cityCount).forEach(([city, count]) => {
            console.log(`${city}: ${count} contact(s)`);
        });

        console.log("\nCount of Contacts by State:");
        Object.entries(stateCount).forEach(([state, count]) => {
            console.log(`${state}: ${count} contact(s)`);
        });
    }

    sortContactsByName() {
        this.contacts.sort((a, b) => {
            let nameA = a.firstName.toLowerCase();
            let nameB = b.firstName.toLowerCase();
            return nameA.localeCompare(nameB);
        });

        console.log("\nContacts sorted by Name:");
        this.contacts.forEach(contact => console.log(contact.toString()));
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