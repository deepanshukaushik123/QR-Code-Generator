// import React, { useEffect, useRef, useState } from 'react';
// import './style.css';
// import QRCodeStyling from 'qr-code-styling';
// import logo from '../../Assets/logo2.png';
// import NGColorLogo from '../../Assets/NexGen Logo_color.png'

// const QRCodeGenerator = () => {
//   const [contact, setContact] = useState({
//     firstName: '',
//     lastName: '',
//     phone: '',
//     email: '',
//     designation: '',
//     company: '',
//     street: '',
//     city: '',
//     state: '',
//     postalCode: '',
//     country: '',
//     website: ''
//   });

//   const [errors, setErrors] = useState({});
//   const [qrCode, setQrCode] = useState(null);
//   const qrCodeRef = useRef(null);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setContact({ ...contact, [name]: value });
//   };

//   const generateVCard = (contact) => {
//     return (
//       `BEGIN:VCARD\nVERSION:3.0\nN:${contact.lastName};${contact.firstName}\nFN:${contact.firstName} ${contact.lastName}\nORG:${contact.company}\nTITLE:${contact.designation}\nTEL:${contact.phone}\nEMAIL:${contact.email}\nADR:;;${contact.street};${contact.city};${contact.state};${contact.postalCode};${contact.country}\nURL:${contact.website}\nEND:VCARD`
//     );
//   };

//   const validateFields = () => {
//     let valid = true;
//     const newErrors = {};

//     if (!contact.firstName.trim()) {
//       newErrors.firstName = 'First name is required';
//       valid = false;
//     }
//     if (!contact.lastName.trim()) {
//       newErrors.lastName = 'Last name is required';
//       valid = false;
//     }
//     if (!contact.phone.trim()) {
//       newErrors.phone = 'Phone number is required';
//       valid = false;
//     }
//     if (!contact.email.trim()) {
//       newErrors.email = 'Email is required';
//       valid = false;
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   const handleGenerateClick = () => {
//     if (validateFields()) {
//       const vCard = generateVCard(contact);

//       const newQrCode = new QRCodeStyling({
//         width: 300,
//         height: 300,
//         data: vCard,
//         cornersSquareOptions: {
//             color: '#00BAF2', // Customize the color of the big squares
//             type: 'extra-rounded'
//           },
//           cornersDotOptions: {
//             color: '#00BAF2' // Customize the color of the dots inside the big squares
//           },
//         image: NGColorLogo,
//         dotsOptions: {
//         //   color: '#000000',
//         color: "#263645",
//           type: 'rounded'
//         },
//         backgroundOptions: {
//           color: 'transparent',
//         },
//         imageOptions: {
//           crossOrigin: 'anonymous',
//           margin: 10
//         }
//       });

//       setQrCode(newQrCode);
//     }
//   };

//   const handleDownloadClick = () => {
//     if (qrCode) {
//       qrCode.download({
//         name: `${contact.firstName}-${contact.lastName}-qrcode`,
//         extension: 'png'
//       });
//     }
//   };

//   useEffect(() => {
//     if (qrCode) {
//       qrCode.append(qrCodeRef.current);
//     }
//   }, [qrCode]);

//   return (
//     <div className='container'>
//       <img src={logo} className='logo' alt='NexGen Logo' />
//       <h1>NexGen Contact QR Generator</h1>
//       <div className='form-group'>
//         <label htmlFor="firstName">First Name:</label>
//         <input type="text" className='form-control' id="firstName" name="firstName" value={contact.firstName} onChange={handleInputChange} />
//         {errors.firstName && <div className="error">{errors.firstName}</div>}
//       </div>
//       <div className='form-group'>
//         <label htmlFor="lastName">Last Name:</label>
//         <input type="text" className='form-control' id="lastName" name="lastName" value={contact.lastName} onChange={handleInputChange} />
//         {errors.lastName && <div className="error">{errors.lastName}</div>}
//       </div>
//       <div className='form-group'>
//         <label htmlFor="phone">Phone Number:</label>
//         <input type="text" className='form-control' id="phone" name="phone" value={contact.phone} onChange={handleInputChange} />
//         {errors.phone && <div className="error">{errors.phone}</div>}
//       </div>
//       <div className='form-group'>
//         <label htmlFor="email">Email Address:</label>
//         <input type="email" className='form-control' id="email" name="email" value={contact.email} onChange={handleInputChange} />
//         {errors.email && <div className="error">{errors.email}</div>}
//       </div>
//       <div className='form-group'>
//         <label htmlFor="designation">Designation:</label>
//         <input type="text" className='form-control' id="designation" name="designation" value={contact.designation} onChange={handleInputChange} />
//       </div>
//       <div className='form-group'>
//         <label htmlFor="company">Company Name:</label>
//         <input type="text" className='form-control' id="company" name="company" value={contact.company} onChange={handleInputChange} />
//       </div>
//       <div className='form-group'>
//         <label htmlFor="street">Street Address:</label>
//         <input type="text" className='form-control' id="street" name="street" value={contact.street} onChange={handleInputChange} />
//       </div>
//       <div className='form-group'>
//         <label htmlFor="city">City:</label>
//         <input type="text" className='form-control' id="city" name="city" value={contact.city} onChange={handleInputChange} />
//       </div>
//       <div className='form-group'>
//         <label htmlFor="state">State:</label>
//         <input type="text" className='form-control' id="state" name="state" value={contact.state} onChange={handleInputChange} />
//       </div>
//       <div className='form-group'>
//         <label htmlFor="postalCode">Postal Code:</label>
//         <input type="text" className='form-control' id="postalCode" name="postalCode" value={contact.postalCode} onChange={handleInputChange} />
//       </div>
//       <div className='form-group'>
//         <label htmlFor="country">Country:</label>
//         <input type="text" className='form-control' id="country" name="country" value={contact.country} onChange={handleInputChange} />
//       </div>
//       <div className='form-group'>
//         <label htmlFor="website">Website:</label>
//         <input type="text" className='form-control' id="website" name="website" value={contact.website} onChange={handleInputChange} />
//       </div>
//       <div className='form-group'>
//         <button className='btn btn-primary' onClick={handleGenerateClick}>Generate QR Code</button>
//       </div>

//       {
//         qrCode && (
//           <div>
//             <h2>QR Code for {contact.firstName} {contact.lastName}</h2>
//             <div style={{backgroundColor: "white"}} ref={qrCodeRef} />
//           </div>
//         )
//       }
//       {qrCode && (
//         <button className='btn btn-success mt-3' onClick={handleDownloadClick}>Download QR Code</button>
//       )}
//     </div>
//   );
// };

// export default QRCodeGenerator;


import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import QRCodeStyling from 'qr-code-styling';
import logo from '../../Assets/logo2.png';
import NGColorLogo from '../../Assets/NexGen Logo_color.png';

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

  const [errors, setErrors] = useState({});
  const [qrCodeInstance, setQrCodeInstance] = useState(null); // State to hold the latest QR code instance

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
      const vCard = generateVCard(contact);

      const newQrCodeInstance = new QRCodeStyling({
        width: 250,
        height: 250,
        data: vCard,
        cornersSquareOptions: {
          color: '#00BAF2',
          type: 'extra-rounded'
        },
        cornersDotOptions: {
          color: '#00BAF2'
        },
        // image: NGColorLogo,
        dotsOptions: {
          color: "#263645",
          type: 'rounded',
          scale: 0.4 // Decrease the density by increasing the spacing between dots
        },
        backgroundOptions: {
          color: 'transparent',
        },
        imageOptions: {
          crossOrigin: 'anonymous',
          margin: 5,
          imageSize: 0.8 // Increase the size of the image (default is 0.2)
        }
      });

      setQrCodeInstance(newQrCodeInstance); // Update the state with the new QR code instance
    }
  };

  const handleDownloadClick = () => {
    if (qrCodeInstance) {
      qrCodeInstance.download({
        name: `${contact.firstName}-${contact.lastName}-qrcode`,
        extension: 'png'
      });
    }
  };

  useEffect(() => {
    // Ensure previous QR code is removed before appending the new one
    if (qrCodeInstance && qrCodeRef.current) {
      qrCodeRef.current.innerHTML = ''; // Clear any existing QR code
      qrCodeInstance.append(qrCodeRef.current); // Append the new QR code
    }
  }, [qrCodeInstance]);

  return (
    <div className='main-container'>
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

      <div className='QRBox' ref={qrCodeRef} />
      
      {qrCodeInstance && (
        <button className='btn btn-success mt-3' onClick={handleDownloadClick}>Download QR Code</button>
      )}
    </div>
  );
};

export default QRCodeGenerator;
