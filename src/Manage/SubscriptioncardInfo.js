import React, { useState, useEffect } from 'react';

const SelectedCardInfo = ({ selectedCard }) => {
  const [price, setPrice] = useState(0);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [cardNumber, setCardNumber] = useState('');

  useEffect(() => {
    if (selectedCard === 'monthly') {
      setPrice(199);
    } else if (selectedCard === '3-month') {
      setPrice(550);
    } else if (selectedCard === 'yearly') {
      setPrice(1850);
    } else {
      setPrice(0);
    }
  }, [selectedCard]);

  const handleButtonClick = () => {
    setIsSuccessful(true);
    setCardNumber('')
  };

  return (
    <div className='text-white'>
      <div>
      <h1>Selected Card Info</h1>
      <p>You selected: {selectedCard}</p>
      <p>Your Price: ₹-{price}</p>

      <input
        type='text'
        placeholder='Enter card number'
        className=" bg-white text-black rounded-full pl-10 pr-4 py-2 w-full focus:outline-none"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
      />
      </div>
      <div className='flex'>
      <button onClick={handleButtonClick} className='text-white bg-blue-600 m-5 p-4 rounded-lg'>click to proceed</button>

      {isSuccessful && <p className='bg-green-400 p-5 m-4 rounded-lg'>Payment Successful!</p>}
      </div>
    </div>
  );
};


export default SelectedCardInfo;
