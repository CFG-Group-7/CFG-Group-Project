import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { describe, it, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import FunFact from "../components/FunFact";

describe("FunFact.jsx test", () => {


    test("renders fun fact heading", () =>{
        render(<FunFact />);
        
        expect(screen.getByText("Fun Fact!")).toBeInTheDocument();
    })

})