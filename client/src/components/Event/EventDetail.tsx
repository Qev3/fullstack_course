import { useWeather } from "../hooks/useWeather";

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

type Props = {
    event: PollingEvent;
};

export default function EventDetail({ event }: Props) {
    const { weather, error } = useWeather(event.location);

    return (
        <div>
            <h2>{event.title}</h2>
            <p>Místo: {event.location ?? "nezadáno"}</p>

            <h3>Termíny:</h3>
            <table>
                <thead>
                <tr>
                    <th>Datum</th>
                    <th>Účastníci</th>
                </tr>
                </thead>
                <tbody>
                {event.dates.map((date) => (
                    <tr key={date.timestamp}>
                        <td>{new Date(date.timestamp).toLocaleDateString()}</td>
                        <td>
                            {date.records
                                .map((r) => `${r.name} (${r.answer})`)
                                .join(", ")}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <h3>Počasí dnes:</h3>
            {error && <p>Chyba: {error}</p>}
            {weather ? <p>{weather.temp} °C</p> : <p>Načítám...</p>}
        </div>
    );
}
