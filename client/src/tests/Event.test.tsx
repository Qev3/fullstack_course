import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";
import  { Event } from "../components/Event/Event.tsx";
import type { DateRecord } from "../components/Event/Event.tsx";

describe("Event component", () => {
    const mockDates: DateRecord[] = [
        {
            timestamp: new Date(2025, 0, 1).getTime(),
            records: [
                { name: "Alice", answer: "yes" },
                { name: "Bob", answer: "no" },
            ],
        },
    ];

    it("zobrazí titulek a lokaci", () => {
        render(<Event id="1" title="Test Event" location="Prague" dates={mockDates} />);
        expect(screen.getByText("Test Event")).toBeInTheDocument();
        expect(screen.getByText(/Prague/)).toBeInTheDocument();
    });

    it("zobrazí jména uživatelů", () => {
        render(<Event id="1" title="Test Event" location="Prague" dates={mockDates} />);
        expect(screen.getByText("Alice")).toBeInTheDocument();
        expect(screen.getByText("Bob")).toBeInTheDocument();
    });
});