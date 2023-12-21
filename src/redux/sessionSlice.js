import { createSlice } from "@reduxjs/toolkit";

const sessionSlice = createSlice({
    name: "session",
    initialState: {
        bookings: [
            {
                date: "1 Sep, Fri 09:00 AM",
                name: "John Doe",
                age: 25,
            }, 
            {
                date: "2 Sep, Sat 12:00 PM",
                name: "Jack Sparrow",
                age: 42,
            },
            // {
            //     date: "2 Sep, Sat 12:00 PM",
            //     name: "John Doe",
            //     age: 25,
            // },
            // {
            //     date: "2 Sep, Sat 12:00 PM",
            //     name: "John Doe",
            //     age: 25,
            // },
            // {
            //     date: "2 Sep, Sat 12:00 PM",
            //     name: "John Doe",
            //     age: 25,
            // }
        ],
        availableSlots: [
            {
                date: "1 Sep",
                day: "Fri",
                slots: [
                    { time: "09:00 AM", available: true },
                    { time: "12:00 PM", available: true },
                    { time: "03:00 PM", available: true },
                ],
            },
            {
                date: "2 Sep",
                day: "Sat",
                slots: [
                    { time: "09:00 AM", available: true },
                    { time: "12:00 PM", available: true },
                    { time: "03:00 PM", available: true },
                    { time: "06:00 PM", available: true }
                ],
            },
            {
                date: "3 Sep",
                day: "Sun",
                slots: [
                    { time: "09:00 AM", available: true },
                    { time: "12:00 PM", available: true },
                    { time: "06:00 PM", available: true }
                ],
            },
            {
                date: "4 Sep",
                day: "Mon",
                slots: [
                    { time: "09:00 AM", available: true },
                    { time: "12:00 PM", available: true },
                    { time: "03:00 PM", available: true },
                    { time: "06:00 PM", available: true }
                ],
            }
        ]
    },
    reducers: {
        bookSession: (state, action) => {
            state.bookings.push(action.payload);
        },
    },
});

export const { bookSession } = sessionSlice.actions;
export default sessionSlice.reducer;