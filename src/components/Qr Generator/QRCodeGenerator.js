import React, { useRef, useState } from 'react';
import './style.css';
import QRCode from 'qrcode.react';
import { toPng } from 'html-to-image';
import logo from '../../Assets/logo2.png';

const QRCodeGenerator = () => {
    const [contact, setContact] = useState({
        name: '',
        phone: '',
        email: '',
        designation: '',
        company: ''
    });

    const [qrValue, setQrValue] = useState('');
    const [errors, setErrors] = useState({});
    const qrCodeRef = useRef(null);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setContact({ ...contact, [name]: value });
    };

    const generateVCard = (contact) => {
        return (
            `BEGIN:VCARD\nVERSION:3.0\nN:${contact.name}\nORG:${contact.company}\nTITLE:${contact.designation}\nTEL:${contact.phone}\nEMAIL:${contact.email}\nEND:VCARD`
        );
    };

    const validateFields = () => {
        let valid = true;
        const newErrors = {};

        if (!contact.name.trim()) {
            newErrors.name = 'Name is required';
            valid = false;
        }
        if (!contact.phone.trim()) {
            newErrors.phone = 'Phone number is required';
            valid = false;
        }
        if (!contact.email.trim()) {
            newErrors.email = 'Email is required';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleGenerateClick = () => {
        if (validateFields()) {
            setQrValue(generateVCard(contact));
        }
    };

    const handleDownloadClick = () => {
        if (qrCodeRef.current) {
            toPng(qrCodeRef.current)
                .then((dataUrl) => {
                    const link = document.createElement('a');
                    link.download = `${contact.name}-qrcode.png`;
                    link.href = dataUrl;
                    link.click();
                })
                .catch((error) => {
                    console.error('Error generating QR code image:', error);
                });
        }
    };

    return (
        <div className='Container'>
            <img src={logo} className='logo' alt='NexGen Logo' />
            <h1>NexGen Contact QR Generator</h1>
            <div className='form-group'>
                <label htmlFor="name">Name:</label>
                <input type="text" className='form-control' id="name" name="name" value={contact.name} onChange={handleInputChange} />
                {errors.name && <div className="error">{errors.name}</div>}
            </div>
            <div className='form-group'>
                <label htmlFor="phone">Phone Number:</label>
                <input type="text" className='form-control' id="phone" name="phone" value={contact.phone} onChange={handleInputChange} />
                {errors.phone && <div className="error">{errors.phone}</div>}
            </div>
            <div className='form-group'>
                <label htmlFor="email">Email Address:</label>
                <input type="email" className='form-control' id="email" name="email" value={contact.email} onChange={handleInputChange} />
                {errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div className='form-group'>
                <label htmlFor="designation">Designation:</label>
                <input type="text" className='form-control' id="designation" name="designation" value={contact.designation} onChange={handleInputChange} />
            </div>
            <div className='form-group'>
                <label htmlFor="company">Company Name:</label>
                <input type="text" className='form-control' id="company" name="company" value={contact.company} onChange={handleInputChange} />
            </div>
            <div className='form-group'>
                <button className='btn btn-primary' onClick={handleGenerateClick}>Generate QR Code</button>
            </div>

            {
                qrValue && (
                    <div>
                        <h2>QR Code for {contact.name}</h2>
                        <div ref={qrCodeRef}>
                            <QRCode
                                value={qrValue}
                                size={250}
                                fgColor="#000000"
                                bgColor="#ffffff"
                                level="H"
                            />
                        </div>
                    </div>

                )
            }
            {qrValue && (
                <button className='btn btn-success mt-3' onClick={handleDownloadClick}>Download QR Code</button>

            )}
        </div >
    );
};

export default QRCodeGenerator;
