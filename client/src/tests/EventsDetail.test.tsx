import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import EventDetail from "../components/Event/EventDetail";
import type { PollingEvent } from "../components/Event/EventDetail.tsx";

const mockEvent: PollingEvent = {
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
};

afterEach(() => {
    jest.restoreAllMocks();
});

test("zobrazí detail události a počasí při úspěšném fetchi", async () => {
    jest.spyOn(global, "fetch").mockResolvedValueOnce({
        ok: true,
        json: async () => ({ current_weather: { temperature: 20 } }),
    } as Response);

    render(
        <MemoryRouter>
            <EventDetail event={mockEvent} />
        </MemoryRouter>
    );

    expect(screen.getByText("Tým building")).toBeInTheDocument();
    expect(screen.getByText("Místo: Praha")).toBeInTheDocument();

    await waitFor(() => {
        expect(screen.getByText("20 °C")).toBeInTheDocument();
    });
});


test("zobrazí chybu, když API vrátí status !== 200", async () => {
    jest.spyOn(global, "fetch").mockResolvedValueOnce({
        ok: false,
        statusText: "Not Found",
    } as Response);

    render(
        <MemoryRouter>
            <EventDetail event={mockEvent} />
        </MemoryRouter>
    );


    await waitFor(() => {
        expect(screen.getByText(/Chyba/i)).toBeInTheDocument();
    });
});


test("zobrazí chybu, když API vrátí nevalidní data", async () => {
    jest.spyOn(global, "fetch").mockResolvedValueOnce({
        ok: true,
        json: async () => ({ current_weather: { temperature: "invalid" } }),
    } as Response);

    render(
        <MemoryRouter>
            <EventDetail event={mockEvent} />
        </MemoryRouter>
    );


    await waitFor(() => {
        expect(screen.getByText(/Chyba/i)).toBeInTheDocument();
    });
});
