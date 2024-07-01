// import React, { useRef, useState } from 'react';
// import './style.css';
// import QRCode from 'qrcode.react';
// import { toPng } from 'html-to-image';
// import logo from '../../Assets/logo2.png';

// const QRCodeGenerator = () => {
//     const [contact, setContact] = useState({
//         name: '',
//         phone: '',
//         email: '',
//         designation: '',
//         company: ''
//     });

//     const [qrValue, setQrValue] = useState('');
//     const [errors, setErrors] = useState({});
//     const qrCodeRef = useRef(null);

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setContact({ ...contact, [name]: value });
//     };

//     const generateVCard = (contact) => {
//         return (
//             `BEGIN:VCARD\nVERSION:3.0\nN:${contact.name}\nORG:${contact.company}\nTITLE:${contact.designation}\nTEL:${contact.phone}\nEMAIL:${contact.email}\nEND:VCARD`
//         );
//     };

//     const validateFields = () => {
//         let valid = true;
//         const newErrors = {};

//         if (!contact.name.trim()) {
//             newErrors.name = 'Name is required';
//             valid = false;
//         }
//         if (!contact.phone.trim()) {
//             newErrors.phone = 'Phone number is required';
//             valid = false;
//         }
//         if (!contact.email.trim()) {
//             newErrors.email = 'Email is required';
//             valid = false;
//         }

//         setErrors(newErrors);
//         return valid;
//     };

//     const handleGenerateClick = () => {
//         if (validateFields()) {
//             setQrValue(generateVCard(contact));
//         }
//     };

//     const handleDownloadClick = () => {
//         if (qrCodeRef.current) {
//             toPng(qrCodeRef.current)
//                 .then((dataUrl) => {
//                     const link = document.createElement('a');
//                     link.download = `${contact.name}-qrcode.png`;
//                     link.href = dataUrl;
//                     link.click();
//                 })
//                 .catch((error) => {
//                     console.error('Error generating QR code image:', error);
//                 });
//         }
//     };

//     return (
//         <div className='Container'>
//             <img src={logo} className='logo' alt='NexGen Logo' />
//             <h1>NexGen Contact QR Generator</h1>
//             <div className='form-group'>
//                 <label htmlFor="name">Name:</label>
//                 <input type="text" className='form-control' id="name" name="name" value={contact.name} onChange={handleInputChange} />
//                 {errors.name && <div className="error">{errors.name}</div>}
//             </div>
//             <div className='form-group'>
//                 <label htmlFor="phone">Phone Number:</label>
//                 <input type="text" className='form-control' id="phone" name="phone" value={contact.phone} onChange={handleInputChange} />
//                 {errors.phone && <div className="error">{errors.phone}</div>}
//             </div>
//             <div className='form-group'>
//                 <label htmlFor="email">Email Address:</label>
//                 <input type="email" className='form-control' id="email" name="email" value={contact.email} onChange={handleInputChange} />
//                 {errors.email && <div className="error">{errors.email}</div>}
//             </div>
//             <div className='form-group'>
//                 <label htmlFor="designation">Designation:</label>
//                 <input type="text" className='form-control' id="designation" name="designation" value={contact.designation} onChange={handleInputChange} />
//             </div>
//             <div className='form-group'>
//                 <label htmlFor="company">Company Name:</label>
//                 <input type="text" className='form-control' id="company" name="company" value={contact.company} onChange={handleInputChange} />
//             </div>
//             <div className='form-group'>
//                 <button className='btn btn-primary' onClick={handleGenerateClick}>Generate QR Code</button>
//             </div>

//             {
//                 qrValue && (
//                     <div>
//                         <h2>QR Code for {contact.name}</h2>
//                         <div ref={qrCodeRef}>
//                             <QRCode
//                                 value={qrValue}
//                                 size={250}
//                                 fgColor="#000000"
//                                 bgColor="#ffffff"
//                                 level="H"
//                             />
//                         </div>
//                     </div>

//                 )
//             }
//             {qrValue && (
//                 <button className='btn btn-success mt-3' onClick={handleDownloadClick}>Download QR Code</button>

//             )}
//         </div >
//     );
// };

// export default QRCodeGenerator;



// import React, { useRef, useState } from 'react';
// import './style.css';
// import QRCode from 'qrcode.react';
// import { toPng } from 'html-to-image';
// import logo from '../../Assets/logo2.png';

// const QRCodeGenerator = () => {
//     const [contact, setContact] = useState({
//         name: '',
//         phone: '',
//         email: '',
//         designation: '',
//         company: '',
//         address: '', // Added address field
//         website: '' // Added website field
//     });

//     const [qrValue, setQrValue] = useState('');
//     const [errors, setErrors] = useState({});
//     const qrCodeRef = useRef(null);

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setContact({ ...contact, [name]: value });
//     };

//     const generateVCard = (contact) => {
//         return (
//             `BEGIN:VCARD\nVERSION:3.0\nN:${contact.name}\nORG:${contact.company}\nTITLE:${contact.designation}\nTEL:${contact.phone}\nEMAIL:${contact.email}\nADR:${contact.address}\nURL:${contact.website}\nEND:VCARD`
//         );
//     };

//     const validateFields = () => {
//         let valid = true;
//         const newErrors = {};

//         if (!contact.name.trim()) {
//             newErrors.name = 'Name is required';
//             valid = false;
//         }
//         if (!contact.phone.trim()) {
//             newErrors.phone = 'Phone number is required';
//             valid = false;
//         }
//         if (!contact.email.trim()) {
//             newErrors.email = 'Email is required';
//             valid = false;
//         }

//         setErrors(newErrors);
//         return valid;
//     };

//     const handleGenerateClick = () => {
//         if (validateFields()) {
//             setQrValue(generateVCard(contact));
//         }
//     };

//     const handleDownloadClick = () => {
//         if (qrCodeRef.current) {
//             toPng(qrCodeRef.current)
//                 .then((dataUrl) => {
//                     const link = document.createElement('a');
//                     link.download = `${contact.name}-qrcode.png`;
//                     link.href = dataUrl;
//                     link.click();
//                 })
//                 .catch((error) => {
//                     console.error('Error generating QR code image:', error);
//                 });
//         }
//     };

//     return (
//         <div className='Container'>
//             <img src={logo} className='logo' alt='NexGen Logo' />
//             <h1>NexGen Contact QR Generator</h1>
//             <div className='form-group'>
//                 <label htmlFor="name">Name:</label>
//                 <input type="text" className='form-control' id="name" name="name" value={contact.name} onChange={handleInputChange} />
//                 {errors.name && <div className="error">{errors.name}</div>}
//             </div>
//             <div className='form-group'>
//                 <label htmlFor="phone">Phone Number:</label>
//                 <input type="text" className='form-control' id="phone" name="phone" value={contact.phone} onChange={handleInputChange} />
//                 {errors.phone && <div className="error">{errors.phone}</div>}
//             </div>
//             <div className='form-group'>
//                 <label htmlFor="email">Email Address:</label>
//                 <input type="email" className='form-control' id="email" name="email" value={contact.email} onChange={handleInputChange} />
//                 {errors.email && <div className="error">{errors.email}</div>}
//             </div>
//             <div className='form-group'>
//                 <label htmlFor="designation">Designation:</label>
//                 <input type="text" className='form-control' id="designation" name="designation" value={contact.designation} onChange={handleInputChange} />
//             </div>
//             <div className='form-group'>
//                 <label htmlFor="company">Company Name:</label>
//                 <input type="text" className='form-control' id="company" name="company" value={contact.company} onChange={handleInputChange} />
//             </div>
//             <div className='form-group'>
//                 <label htmlFor="address">Address:</label>
//                 <input type="text" className='form-control' id="address" name="address" value={contact.address} onChange={handleInputChange} />
//             </div>
//             <div className='form-group'>
//                 <label htmlFor="website">Website:</label>
//                 <input type="text" className='form-control' id="website" name="website" value={contact.website} onChange={handleInputChange} />
//             </div>
//             <div className='form-group'>
//                 <button className='btn btn-primary' onClick={handleGenerateClick}>Generate QR Code</button>
//             </div>

//             {
//                 qrValue && (
//                     <div>
//                         <h2>QR Code for {contact.name}</h2>
//                         <div ref={qrCodeRef}>
//                             <QRCode
//                                 value={qrValue}
//                                 size={250}
//                                 fgColor="#000000"
//                                 bgColor="#ffffff"
//                                 level="H"
//                             />
//                         </div>
//                     </div>
//                 )
//             }
//             {qrValue && (
//                 <button className='btn btn-success mt-3' onClick={handleDownloadClick}>Download QR Code</button>
//             )}
//         </div>
//     );
// };

// export default QRCodeGenerator;


// import React, { useRef, useState } from 'react';
// import './style.css';
// import QRCode from 'qrcode.react';
// import { toPng } from 'html-to-image';
// import logo from '../../Assets/logo2.png';

// const QRCodeGenerator = () => {
//     const [contact, setContact] = useState({
//         firstName: '',
//         lastName: '',
//         phone: '',
//         email: '',
//         designation: '',
//         company: '',
//         address: '',
//         website: ''
//     });

//     const [qrValue, setQrValue] = useState('');
//     const [errors, setErrors] = useState({});
//     const qrCodeRef = useRef(null);

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setContact({ ...contact, [name]: value });
//     };

//     const generateVCard = (contact) => {
//         return (
//             `BEGIN:VCARD\nVERSION:3.0\nN:${contact.lastName};${contact.firstName}\nFN:${contact.firstName} ${contact.lastName}\nORG:${contact.company}\nTITLE:${contact.designation}\nTEL:${contact.phone}\nEMAIL:${contact.email}\nADR:${contact.address}\nURL:${contact.website}\nEND:VCARD`
//         );
//     };

//     const validateFields = () => {
//         let valid = true;
//         const newErrors = {};

//         if (!contact.firstName.trim()) {
//             newErrors.firstName = 'First name is required';
//             valid = false;
//         }
//         if (!contact.lastName.trim()) {
//             newErrors.lastName = 'Last name is required';
//             valid = false;
//         }
//         if (!contact.phone.trim()) {
//             newErrors.phone = 'Phone number is required';
//             valid = false;
//         }
//         if (!contact.email.trim()) {
//             newErrors.email = 'Email is required';
//             valid = false;
//         }

//         setErrors(newErrors);
//         return valid;
//     };

//     const handleGenerateClick = () => {
//         if (validateFields()) {
//             setQrValue(generateVCard(contact));
//         }
//     };

//     const handleDownloadClick = () => {
//         if (qrCodeRef.current) {
//             toPng(qrCodeRef.current)
//                 .then((dataUrl) => {
//                     const link = document.createElement('a');
//                     link.download = `${contact.firstName}-${contact.lastName}-qrcode.png`;
//                     link.href = dataUrl;
//                     link.click();
//                 })
//                 .catch((error) => {
//                     console.error('Error generating QR code image:', error);
//                 });
//         }
//     };

//     return (
//         <div className='Container'>
//             <img src={logo} className='logo' alt='NexGen Logo' />
//             <h1>NexGen Contact QR Generator</h1>
//             <div className='form-group'>
//                 <label htmlFor="firstName">First Name:</label>
//                 <input type="text" className='form-control' id="firstName" name="firstName" value={contact.firstName} onChange={handleInputChange} />
//                 {errors.firstName && <div className="error">{errors.firstName}</div>}
//             </div>
//             <div className='form-group'>
//                 <label htmlFor="lastName">Last Name:</label>
//                 <input type="text" className='form-control' id="lastName" name="lastName" value={contact.lastName} onChange={handleInputChange} />
//                 {errors.lastName && <div className="error">{errors.lastName}</div>}
//             </div>
//             <div className='form-group'>
//                 <label htmlFor="phone">Phone Number:</label>
//                 <input type="text" className='form-control' id="phone" name="phone" value={contact.phone} onChange={handleInputChange} />
//                 {errors.phone && <div className="error">{errors.phone}</div>}
//             </div>
//             <div className='form-group'>
//                 <label htmlFor="email">Email Address:</label>
//                 <input type="email" className='form-control' id="email" name="email" value={contact.email} onChange={handleInputChange} />
//                 {errors.email && <div className="error">{errors.email}</div>}
//             </div>
//             <div className='form-group'>
//                 <label htmlFor="designation">Designation:</label>
//                 <input type="text" className='form-control' id="designation" name="designation" value={contact.designation} onChange={handleInputChange} />
//             </div>
//             <div className='form-group'>
//                 <label htmlFor="company">Company Name:</label>
//                 <input type="text" className='form-control' id="company" name="company" value={contact.company} onChange={handleInputChange} />
//             </div>
//             <div className='form-group'>
//                 <label htmlFor="address">Address:</label>
//                 <input type="text" className='form-control' id="address" name="address" value={contact.address} onChange={handleInputChange} />
//             </div>
//             <div className='form-group'>
//                 <label htmlFor="website">Website:</label>
//                 <input type="text" className='form-control' id="website" name="website" value={contact.website} onChange={handleInputChange} />
//             </div>
//             <div className='form-group'>
//                 <button className='btn btn-primary' onClick={handleGenerateClick}>Generate QR Code</button>
//             </div>

//             {
//                 qrValue && (
//                     <div>
//                         <h2>QR Code for {contact.firstName} {contact.lastName}</h2>
//                         <div ref={qrCodeRef}>
//                             <QRCode
//                                 value={qrValue}
//                                 size={250}
//                                 fgColor="#000000"
//                                 bgColor="#ffffff"
//                                 level="H"
//                             />
//                         </div>
//                     </div>
//                 )
//             }
//             {qrValue && (
//                 <button className='btn btn-success mt-3' onClick={handleDownloadClick}>Download QR Code</button>
//             )}
//         </div>
//     );
// };

// export default QRCodeGenerator;


import React, { useRef, useState } from 'react';
import './style.css';
import QRCode from 'qrcode.react';
import { toPng } from 'html-to-image';
import logo from '../../Assets/logo2.png';

const QRCodeGenerator = () => {
    const [contact, setContact] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        designation: '',
        company: '',
        street: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
        website: ''
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
            `BEGIN:VCARD\nVERSION:3.0\nN:${contact.lastName};${contact.firstName}\nFN:${contact.firstName} ${contact.lastName}\nORG:${contact.company}\nTITLE:${contact.designation}\nTEL:${contact.phone}\nEMAIL:${contact.email}\nADR:;;${contact.street};${contact.city};${contact.state};${contact.postalCode};${contact.country}\nURL:${contact.website}\nEND:VCARD`
        );
    };

    const validateFields = () => {
        let valid = true;
        const newErrors = {};

        if (!contact.firstName.trim()) {
            newErrors.firstName = 'First name is required';
            valid = false;
        }
        if (!contact.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
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
                    link.download = `${contact.firstName}-${contact.lastName}-qrcode.png`;
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
                <label htmlFor="firstName">First Name:</label>
                <input type="text" className='form-control' id="firstName" name="firstName" value={contact.firstName} onChange={handleInputChange} />
                {errors.firstName && <div className="error">{errors.firstName}</div>}
            </div>
            <div className='form-group'>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" className='form-control' id="lastName" name="lastName" value={contact.lastName} onChange={handleInputChange} />
                {errors.lastName && <div className="error">{errors.lastName}</div>}
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
                <label htmlFor="street">Street Address:</label>
                <input type="text" className='form-control' id="street" name="street" value={contact.street} onChange={handleInputChange} />
            </div>
            <div className='form-group'>
                <label htmlFor="city">City:</label>
                <input type="text" className='form-control' id="city" name="city" value={contact.city} onChange={handleInputChange} />
            </div>
            <div className='form-group'>
                <label htmlFor="state">State:</label>
                <input type="text" className='form-control' id="state" name="state" value={contact.state} onChange={handleInputChange} />
            </div>
            <div className='form-group'>
                <label htmlFor="postalCode">Postal Code:</label>
                <input type="text" className='form-control' id="postalCode" name="postalCode" value={contact.postalCode} onChange={handleInputChange} />
            </div>
            <div className='form-group'>
                <label htmlFor="country">Country:</label>
                <input type="text" className='form-control' id="country" name="country" value={contact.country} onChange={handleInputChange} />
            </div>
            <div className='form-group'>
                <label htmlFor="website">Website:</label>
                <input type="text" className='form-control' id="website" name="website" value={contact.website} onChange={handleInputChange} />
            </div>
            <div className='form-group'>
                <button className='btn btn-primary' onClick={handleGenerateClick}>Generate QR Code</button>
            </div>

            {
                qrValue && (
                    <div>
                        <h2>QR Code for {contact.firstName} {contact.lastName}</h2>
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
        </div>
    );
};

export default QRCodeGenerator;
