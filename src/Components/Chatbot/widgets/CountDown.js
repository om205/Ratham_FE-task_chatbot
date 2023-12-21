import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { bookSession } from '../../../redux/sessionSlice.js'

const CountDown = (props) => {
    const [count, setCount] = useState(5);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const closeChatbot = () => {
        const session = {
            name: props.state.name,
            date: props.state.date,
            age: props.state.age
        }
        dispatch(bookSession(session));
        navigate('/page3');
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (count === 0) closeChatbot();
            else setCount((prevCount) => prevCount - 1);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [count]);

    return (
        <div className="flex flex-col items-center justify-center h-60 text-cyan-500">
            <h1 className="text-4xl mb-4">Redirecting: {count}</h1>
        </div>
    );
};

export default CountDown;
