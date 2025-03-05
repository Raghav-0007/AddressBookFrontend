const Contact = require('./Contact.js');
const AddressBook = require('./AddressBook.js');

let myAddressBook = new AddressBook();

try {
    let contact1 = new Contact("John", "Doe", "123 Street", "NewYork", "NewYork", "123456", "9876543210", "john.doe@example.com");
    myAddressBook.addContact(contact1);

    let contact2 = new Contact("Jane", "Smith", "456 Avenue", "LosAngeles", "California", "789012", "8765432109", "jane.smith@example.com");
    myAddressBook.addContact(contact2);

    // Trying to add a duplicate contact
    let duplicateContact = new Contact("John", "Doe", "789 Boulevard", "San Francisco", "California", "654321", "9123456789", "john.duplicate@example.com");
    myAddressBook.addContact(duplicateContact);
} catch (error) {
    console.error(error.message);
}

myAddressBook.displayContacts();
myAddressBook.countContacts();