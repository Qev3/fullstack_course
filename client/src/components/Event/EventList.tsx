import { Link } from "react-router-dom";

type UserRecord = {
    name: string;
    answer: "yes" | "no" | "if-needed";
};

type DateRecord = {
    timestamp: number;
    records: UserRecord[];
};

export type PollingEvent = {
    location?: string;
    title: string;
    id: string;
    dates: DateRecord[];
};

type EventsListProps = {
    data: PollingEvent[];
};

export default function EventsList({ data }: EventsListProps) {
    return (
        <ul>
            {data.map((event) => (
                <li key={event.id}>
                    {event.title} - <Link to={`/events/${event.id}`}>Detail</Link>
                </li>
            ))}
        </ul>
    );
}
