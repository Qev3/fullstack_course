//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { Event } from "./components/Event/Event.tsx";
import { WrapperDiv } from "./components/WrapperDiv/WrapperDiv.tsx";

function App() {
    const birthdayDates = [
        {
            timestamp: new Date("2025-05-01").getTime(),
            records: [
                { name: "Alice", answer: "yes" },
                { name: "Pavel", answer: "no" },
                { name: "Petr", answer: "no" },
                { name: "Bob", answer: "yes" },
            ],
        },
        {
            timestamp: new Date("2025-05-02").getTime(),
            records: [
                { name: "Alice", answer: "no" },
                { name: "Bob", answer: "yes" },
                { name: "Pavel", answer: "yes" },
                { name: "Petr", answer: "no" },
            ],
        },
        {
            timestamp: new Date("2025-05-03").getTime(),
            records: [
                { name: "Alice", answer: "yes" },
                { name: "Bob", answer: "yes" },
                { name: "Pavel", answer: "yes" },
                { name: "Petr", answer: "yes" },
            ],
        },
    ];

    const boulderingDates = [
        {
            timestamp: new Date("2025-06-10").getTime(),
            records: [
                { name: "Alice", answer: "yes" },
                { name: "Bob", answer: "no" },
                { name: "Pavel", answer: "if-needed" },
                { name: "Petr", answer: "if-needed" },
            ],
        },
        {
            timestamp: new Date("2025-06-11").getTime(),
            records: [
                { name: "Alice", answer: "yes" },
                { name: "Bob", answer: "no" },
                { name: "Pavel", answer: "yes" },
                { name: "Petr", answer: "yes" },
            ],
        },
    ];

    const birdwatchingDates = [
        {
            timestamp: new Date("2025-07-15").getTime(),
            records: [
                { name: "Alice", answer: "yes" },
                { name: "Bob", answer: "if-needed" },
                { name: "Pavel", answer: "if-needed" },
                { name: "Petr", answer: "if-needed" },
            ],

        },
        {
            timestamp: new Date("2025-07-16").getTime(),
            records: [
                { name: "Alice", answer: "yes" },
                { name: "Pavel", answer: "yes" },
                { name: "Petr", answer: "yes" },
            ],
        },
    ];

    return (
        <div>
            <h1>Events!</h1>
            <Event id="1" title="Narozeninová párty!" location="Prague" dates={birthdayDates}/>
            <Event id="2" title="Bouldering session" location="Brno" dates={boulderingDates}/>
            <Event id="3" title="Birdwatching" location="Ostrava" dates={birdwatchingDates}/>

        </div>
    );
}

export default App
