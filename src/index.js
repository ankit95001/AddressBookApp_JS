const Contact = require('./models/contact');
const AddressBook = require('./service/AddressBook');

const addressBook = new AddressBook();

try{
    const contact1 = new Contact(
        "Ankit", "Kumar", "Rosera", "Bihar", "India", "848210", "7870793511", "ankit95001kumar@gmail.com"
    );

    const contact2 = new Contact(
        "Aakrati", "Barsaiyan", "Chhatarpur", "MP", "India", "462022", "9302395056", "aakratibarsaiyan@gmail.com"
    );

    addressBook.addContact(contact1);
    addressBook.addContact(contact2);

    console.log(addressBook);

    console.log(addressBook.findContactByName("Ankit"));

    // console.log(addressBook.deleteContact("Ankit"));
    // console.log(addressBook)
    console.log(addressBook.countContacts())

    console.log(addressBook.searchByCityOrState("Bihar"))
    console.log(addressBook.viewPersonsByCityOrState());

    console.log(addressBook.countByCityOrState())


    console.log(addressBook.sortContactsByName())

    console.log(addressBook.sortContactsByCity().map(contact => contact.toString()).join("\n"));

    console.log(addressBook.sortContactsByState().map(contact => contact.toString()).join("\n"));
    console.log(addressBook.sortContactsByZip().map(contact => contact.toString()).join("\n"));
}catch (error) {
    console.error("Error:", error.message);
}

