'use client'
import React, { useState, useEffect } from 'react';

// Function to encode email to a 5-digit number
const encodeEmailTo5DigitNumberWithFixedSalt = async (email: string, salt = 'samsung'): Promise<string> => {
  // Concatenate the fixed salt with the email address
  const saltedEmail = salt + email;

  // Encode the concatenated string to a Uint8Array
  const encoder = new TextEncoder();
  const data = encoder.encode(saltedEmail);

  // Hash the data using SHA-256
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);

  // Convert the hash buffer to a hexadecimal string
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  // Convert the hexadecimal string to a BigInt
  const hashInt = BigInt('0x' + hashHex);

  // Reduce the integer to a 5-digit number
  const shortHashInt = hashInt % 100000n;

  return shortHashInt.toString().padStart(5, '0');
};

interface EmailEncoderProps {
  email: string;
}

// React component to use the encoding function
const EmailEncoder: React.FC<EmailEncoderProps> = ({ email }) => {
  const [encodedNumber, setEncodedNumber] = useState<string | null>(null);

  useEffect(() => {
    const encodeEmail = async () => {
      const result = await encodeEmailTo5DigitNumberWithFixedSalt(email);
      setEncodedNumber(result);
      sessionStorage.setItem('encodedNumber', result); // Save to session storage
    };

    encodeEmail();
  }, [email]);

  return (
    <div>
      ID: {encodedNumber}
    </div>
  );
};

export default EmailEncoder;
