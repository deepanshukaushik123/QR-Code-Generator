// src/QRCodeGenerator.js
import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = () => {
    const [contacts] = useState([
        { name: 'Deepanshu Kaushik', phone: '9650901894', email: 'deepanshukaushik4721@gmail.com' },
        { name: 'Rom Smith', phone: '0987654321', email: 'jane@example.com' },
        { name: 'Jane Rockh', phone: '098331654321', email: 'soth@example.com' },
        { name: ' Doe', phone: '1234567890', email: 'john@example.com' },
        { name: 'JAcjkty', phone: '0987654321', email: 'jane@example.com' },
        { name: 'Shyam Doe', phone: '3242424112', email: 'john@example.com' },
        { name: 'Hari Smith', phone: '0987654321', email: 'jane@example.com' },
        { name: 'OM Doe', phone: '1234567540', email: 'john@example.com' },
        { name: 'Danny', phone: '0987652231', email: 'jane@example.com' },
        // Add more contacts here
    ]);
    const [selectedContact, setSelectedContact] = useState(null);

    const handleSelectChange = (event) => {
        const contact = contacts.find(contact => contact.name === event.target.value);
        setSelectedContact(contact);
    };

    const generateVCard = (contact) => {
        return (
            `BEGIN:VCARD\nVERSION:3.0\nN:${contact.name}\nTEL:${contact.phone}\nEMAIL:${contact.email}\nEND:VCARD`
        );
    };

    return (
        <div>
            <h1>QR Code Contact Generator</h1>
            <select onChange={handleSelectChange}>
                <option value="">Select a contact</option>
                {contacts.map(contact => (
                    <option key={contact.name} value={contact.name}>{contact.name}</option>
                ))}
            </select>

            {selectedContact && (
                <div>
                    <h2>QR Code for {selectedContact.name}</h2>
                    <QRCode value={generateVCard(selectedContact)} />
                </div>
            )}
        </div>
    );
};

export default QRCodeGenerator;
