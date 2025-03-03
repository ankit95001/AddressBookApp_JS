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

    console.log(addressBook)
}catch (error) {
    console.error("Error:", error.message);
}

