import React from 'react';

const Acknowledgement = (props) => (
        <div className='flex justify-center'>
            <button className='bg-sky-400 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-lg' onClick={props.actionProvider.handleAcknowledgement}>Got it!</button>
        </div>
    );

export default Acknowledgement;
