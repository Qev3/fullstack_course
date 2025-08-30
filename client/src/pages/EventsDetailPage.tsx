import { useParams } from "react-router-dom";
import EventDetail from "../components/Event/EventDetail";
import { PollingEvent } from "../components/Event/Event";

const mockData: PollingEvent[] = [
    {
        id: "1",
        title: "Tým building",
        location: "Praha",
        dates: [
            {
                timestamp: 1726514405258,
                records: [
                    { name: "Honza", answer: "yes" },
                    { name: "Jana", answer: "no" },
                ],
            },
        ],
    },
    {
        id: "2",
        title: "Workshop React",
        location: "Brno",
        dates: [
            {
                timestamp: 1726600861177,
                records: [
                    { name: "Pavel", answer: "yes" },
                    { name: "Alice", answer: "if-needed" },
                ],
            },
        ],
    },
];

export default function EventDetailPage() {
    const { id } = useParams<{ id: string }>();
    const event = mockData.find((e) => e.id === id);

    if (!event) {
        return <p>Událost nenalezena.</p>;
    }

    return <EventDetail event={event} />;
}
