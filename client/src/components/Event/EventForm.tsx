import { useState } from "react";

export default function EventForm() {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [dates, setDates] = useState<number[]>([]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (dates.length === 0) {
            alert("Musíte přidat alespoň jedno datum.");
            return;
        }
        await fetch("/api/events", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, location, dates }),
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Název: <input value={title} onChange={e => setTitle(e.target.value)} required /></label>
            <label>Místo: <input value={location} onChange={e => setLocation(e.target.value)} /></label>
            <button type="button" onClick={() => setDates([...dates, Date.now()])}>
                Přidat datum
            </button>
            <ul>
                {dates.map((d, i) => (
                    <li key={i}>
                        {new Date(d).toLocaleString()}
                        <button type="button" onClick={() => setDates(dates.filter((_, index) => index !== i))}>Odstranit</button>
                    </li>
                ))}
            </ul>
            <button type="submit">Odeslat</button>
        </form>
    );
}
