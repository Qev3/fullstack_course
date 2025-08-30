import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import EventsList from '../components/Event/EventList';

const mockData = [
    {
        id: '1',
        title: 'Tým building',
        location: 'Praha',
        dates: [{ timestamp: 1726514405258, records: [] }]
    },
    {
        id: '2',
        title: 'Workshop React',
        location: 'Brno',
        dates: [{ timestamp: 1726600861177, records: [] }]
    }
];

test('renders event list with titles and links', () => {
    render(
        <Router>
            <EventsList data={mockData} />
        </Router>
    );

    expect(screen.getByText(/Tým building/)).toBeInTheDocument();
    expect(screen.getByText(/Workshop React/)).toBeInTheDocument();

    mockData.forEach((event) => {
        expect(screen.getByRole('link', { name: /Detail/i })).toHaveAttribute('href', `/events/${event.id}`);
    });
});

test('has correct link to event details for each event', () => {
    render(
        <Router>
            <EventsList data={mockData} />
        </Router>
    );

    mockData.forEach((event) => {
        const link = screen.getByRole('link', { name: /Detail/i });
        expect(link).toHaveAttribute('href', `/events/${event.id}`);
    });
});

test('displays a message when no events are available', () => {
    render(
        <Router>
            <EventsList data={[]} />
        </Router>
    );

    expect(screen.getByText('Žádné události k zobrazení')).toBeInTheDocument();
});
