const Contact = require('./models/contact');


const contact1 = new Contact(
    "Ankit", "Kumar", "Rosera", "Bihar", "India", "848210", "7870793511", "ankit95001@gmail.com"
);

console.log(contact1.displayContact())