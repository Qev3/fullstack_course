import * as React from "react";

export type UserRecord = {
    name: string;
    answer: "yes" | "no" | "if-needed";
}

export type DateRecord = {
    timestamp: number;
    records: UserRecord[];
}

// props komponenty Event
export type EventProps = {
    location?: string;
    id: string;
    title: string;
    dates: DateRecord[];
}

export function Event({ location, title, dates }: EventProps) {
    const users = Array.from(
        new Set(dates.flatMap((d) => d.records.map((r) => r.name)))
    );

    return (
        <div>
            <h2>{title}</h2>
            {location && <p>Místo konání akce: {location}</p>}

            <table border={1}>
                <thead>
                <tr>
                    <th>Uživatel</th>
                    {dates.map((d) => (
                        <th key={d.timestamp}>
                            {new Date(d.timestamp).toLocaleDateString()}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user}>
                        <td>{user}</td>
                        {dates.map((d) => {
                            const rec = d.records.find((r) => r.name === user);
                            return <td key={d.timestamp}>{rec ? rec.answer : "nevyplněno"}</td>;
                        })}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}