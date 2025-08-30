import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavMenu from './components/Event/NavBar';
import EventsList from './components/Event/EventList';
import EventDetail from './components/Event/EventDetail';
import EventForm from './components/Event/EventForm';
import { PollingEvent, DateRecord } from './components/Event/Event';


const birthdayDates: DateRecord[] = [
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

const boulderingDates: DateRecord[] = [
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

const birdwatchingDates: DateRecord[] = [
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

const data: PollingEvent[] = [
    { id: "1", title: "Narozeninová párty!", location: "Prague", dates: birthdayDates },
    { id: "2", title: "Bouldering session", location: "Brno", dates: boulderingDates },
    { id: "3", title: "Birdwatching", location: "Ostrava", dates: birdwatchingDates },
];

function App() {
    return (
        <Router>
            <NavMenu />
            <h1>Events!</h1>
            <Routes>
                <Route path="/events" element={<EventsList data={data} />} />
                <Route path="/events/:id" element={<EventDetail data={data} />} />
                <Route path="/events/new" element={<EventForm />} />
            </Routes>
        </Router>
    );
}

export default App;
