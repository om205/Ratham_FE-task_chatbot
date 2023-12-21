import React, {useState} from 'react';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';

const DateTimePicker = (props) => {

    const availableSlots = useSelector(state => state.session.availableSlots);
    console.log(availableSlots[2].slots)

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    const submitHandler = () => {
        console.log(availableSlots[selectedDate].date ,availableSlots[selectedDate].slots[selectedTime].time)
        props.actionProvider.handleDateTime(availableSlots[selectedDate].date, availableSlots[selectedDate].day ,availableSlots[selectedDate].slots[selectedTime].time)
    }

    const handleDateChange = (date) => {
        setSelectedDate(date)
        setSelectedTime(null)
    }

    return (
        <div className="flex flex-col items-center justify-center py-8 relative">
            <h1 className="text-2xl font-bold mb-4 text-sky-500">Select a Date</h1>
            <Slider {...settings}>
                {availableSlots.map(({date, day}, index) => (
                    <div
                        key={date}
                        onClick={() => handleDateChange(index)}
                        className={`text-center font-bold ${selectedDate === index ? 'bg-sky-400' : 'bg-white'} rounded-lg p-4 shadow-md`}
                    >
                        <p className={selectedDate === index ? 'text-white' : 'text-sky-400'}>{date}</p>
                        <p className="text-gray-300">{day}</p>
                    </div>
                ))}
            </Slider>

            {selectedDate !== null && 
                <>
                    <h1 className="text-2xl font-bold mt-8 mb-4 text-sky-500">Select a Time</h1>
                    <Slider {...settings}>
                        {availableSlots[selectedDate].slots.map(({time}, index) => (
                            <div
                                key={time}
                                onClick={() => setSelectedTime(index)}
                                className={`text-center ${selectedTime === index ? 'bg-sky-400' : 'bg-white'} rounded-lg p-4 shadow-md`}
                            >
                                <p className={selectedTime === index ? 'text-white' : 'text-sky-400'}>{time}</p>
                            </div>
                        ))}
                    </Slider>
                </>
            }
            {selectedTime !== null &&
                <div className="flex justify-center mt-8">
                    <button onClick={submitHandler} className="bg-sky-400 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded-lg">Confirm</button>
                </div>
            }
        </div>
    );
};

export default DateTimePicker;
