// signup.tsx

import { useState } from 'react';
import Layout from './layout';

const DC_MD_VA_ZIPCODES = [
  '20001', '20002', /* ... other DC zip codes ... */,
  '20701', '20705','20743','21220', /* ... other MD zip codes ... */,
  '22001', '22003', /* ... other VA zip codes ... */
];

const Join = () => {
  const [showModal, setShowModal] = useState(true);
  const [zipCode, setZipCode] = useState('');
  const [isValidZip, setIsValidZip] = useState(false);

  const handleZipCheck = () => {
    if (DC_MD_VA_ZIPCODES.includes(zipCode)) {
      setIsValidZip(true);
      setShowModal(false);
    } else {
      alert('Sorry, we are not servicing your area yet.');
    }
  };

  return (
    <Layout>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <p>Currently we are serving homeowners in the DC/MD/VA area. Enter your zip code below to find out if we are servicing your area.</p>
            <input
              type="text"
              placeholder="Enter Zip Code"
              value={zipCode}
              onChange={e => setZipCode(e.target.value)}
              className="mt-4 p-2 border rounded"
            />
            <button onClick={handleZipCheck} className="mt-4 bg-pink-500 text-white px-4 py-2 rounded">Check</button>
          </div>
        </div>
      )}

      {isValidZip && (
        <div>
          <h1 className="text-3xl font-bold">Join the Home Maintenance Revolution</h1>
          <p>After subscribing you will receive a confirmation email and one of our Home Managers will reach out to set up your first home visit.</p>
          <div className="mt-4 p-4 border rounded bg-white">
            <h2 className="text-xl font-bold">Home Care Subscription</h2>
            <p className="mt-2">$299/year</p>
            <p className="mt-2">Proactive Home Maintenance by MissFix</p>
            <p>Or enter your payment details below</p>
      
            <div className="mt-4">
              <h3 className="font-bold">Contact Information</h3>
              <input type="text" placeholder="Name" className="block w-full p-2 border rounded mt-2" />
              <input type="email" placeholder="Email Address" className="block w-full p-2 border rounded mt-2" />
              <input type="text" placeholder="Phone" className="block w-full p-2 border rounded mt-2" />
            </div>
      
            <div className="mt-4">
              <h3 className="font-bold">Billing Address</h3>
              <input type="text" placeholder="Street Address" className="block w-full p-2 border rounded mt-2" />
              <input type="text" placeholder="City" className="block w-full p-2 border rounded mt-2" />
              <input type="text" placeholder="State" className="block w-full p-2 border rounded mt-2" />
              <input type="text" placeholder="Postal Code" className="block w-full p-2 border rounded mt-2" />
              <select className="block w-full p-2 border rounded mt-2">
                <option selected>United States</option>
                {/* Add other countries if needed */}
              </select>
              <label className="mt-2 flex items-center">
                <input type="checkbox" className="mr-2"/>
                Same billing & shipping info
              </label>
            </div>
      
            <div className="mt-4">
              <input type="text" placeholder="Offer Code (optional)" className="block w-full p-2 border rounded mt-2" />
              <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded">APPLY</button>
            </div>
      
            <div className="mt-4">
              <p>Total Amount: $299.00</p>
              {/* Placeholder for card input. You would likely integrate with a payment gateway like Stripe here. */}
              <div className="mt-2 border p-2 rounded">card (placeholder)</div>
              <button className="mt-2 bg-black text-white px-4 py-2 rounded">PAY $299.00</button>
            </div>
          </div>
        </div>
      )}
    </Layout>
)}

export default Join;
