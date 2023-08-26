import React, { useState } from 'react';
import SelectedCardInfo from './SubscriptioncardInfo';

const ManageSubscription = () => {
    const [selectedCard, setSelectedCard] = useState(null);
    const [showSelectedCardInfo, setShowSelectedCardInfo] = useState(false);

    const handleCardClick = (cardId) => {
        setSelectedCard(cardId);
    };

    const handleShowInfoClick = () => {
        setShowSelectedCardInfo(true);
    };

    return (
        <div >
            <div className='flex justify-center items-center'>
                <p className='text-white my-8 font-bold'>WYNK MUSIC</p>
            </div>
            <div className='flex justify-center items-center'>
                <div className='bg-gray-100 w-[850px] h-[305px] flex space-x-4 p-4 items-center justify-evenly rounded-xl'>
                    <SubscriptionCard
                        id="monthly"
                        selected={selectedCard === 'monthly'}
                        onClick={() => handleCardClick('monthly')}
                        monthly="Monthly"
                        price="199"
                    />
                    <SubscriptionCard
                        id="3-month"
                        selected={selectedCard === '3-month'}
                        onClick={() => handleCardClick('3-month')}
                        monthly="3 Month"
                        price="550"
                    />
                    <SubscriptionCard
                        id="yearly"
                        selected={selectedCard === 'yearly'}
                        onClick={() => handleCardClick('yearly')}
                        monthly="Yearly"
                        price="1850"
                    />

                </div>

            </div>
            <div className='flex justify-center items-center'>
                <button onClick={handleShowInfoClick} className='text-white bg-blue-600 m-5 p-5 rounded-lg'>Confirm Pack</button>
            </div>
            <div className='flex justify-center items-center'>
                {
            showSelectedCardInfo &&  <SelectedCardInfo  selectedCard={selectedCard}/> 
                }
            </div>
        </div>
    );
};

const SubscriptionCard = ({ id, selected, onClick, monthly, price }) => {
    return (
        <div
            className={`h-[150px] w-[150px] rounded-lg bg-blue-400  p-4 ${selected ? 'border-2 border-red-500' : ''
                }`}
            onClick={onClick}
        >
            <h1 className='font-bold text-white ml-5 mt-30'>{monthly}</h1>
            <h2 className='font-bold text-white ml-5 mt-30'>₹-{price}</h2>
        </div>
    );
};

export default ManageSubscription;
