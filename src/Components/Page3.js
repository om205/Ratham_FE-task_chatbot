import React from 'react';
import { useSelector } from 'react-redux';

const Page3 = () => {
  const bookings = useSelector((state) => state.session.bookings);
  const lastBooking = bookings[bookings.length - 1];
  const { name, age } = lastBooking;

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="mt-4 text-4xl mb-4 text-sky-600 font-bold">Success!</h1>
      <div className="mt-8 text-center">
        <p className="text-2xl font-bold text-sky-400 font-mono">
          Your name {name} aged {age} has been added to our student system.
        </p>
        <p className="text-lg text-gray-500">You may now exit.</p>
      </div>
      <h1 className="text-4xl mt-8 mb-4">Upcoming Sessions</h1>
      <div className="flex flex-col  overflow-y-scroll w-2/3">
        {bookings.map((booking, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 m-6">
            <p className="text-lg font-semibold">{booking.date}</p>
            <p className="text-gray-500">{booking.name}</p>
            <p className="text-gray-500">{booking.age} years old</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page3;
