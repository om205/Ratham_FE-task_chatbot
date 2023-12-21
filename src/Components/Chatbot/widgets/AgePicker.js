import React, { useEffect, useState } from 'react';

const AgePicker = (props) => {
    const [age, setAge] = useState(NaN);
    const ages = Array.from({ length: 23 }, (_, i) => i + 18);

    useEffect(() => {
        if (!isNaN(age)) props.actionProvider.handleAge(age);
    }, [age]);


    const handleAgeChange = (event) => {
        console.log(typeof event.target.value, typeof age)
        setAge(Number(event.target.value));
        
    };

    return (
        <div className="relative mr-4">
            <select
                className="block appearance-none w-1/3 ml-auto bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-gray-500"
                value={age}
                onChange={handleAgeChange}
            >
                <option key={-1} value={NaN}>Select your age</option>
                {ages.map((age) => (
                    <option key={age} value={age}>
                        {age}
                    </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path
                        fillRule="evenodd"
                        d="M11.293 7.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L12 9.414l-3.293 3.293a1 1 0 1 1-1.414-1.414l4-4z"
                    />
                </svg>
            </div>
        </div>
    );
};

export default AgePicker;
