import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, it, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import MoreFun from "../../pages/MoreFun";

describe("MoreFun.jsx test", () => {

    afterEach(() => {
        cleanup();
    })

    test("renders the more fun sections", () => {
        render(<MoreFun />)
        
        let websiteNames = [
            "Animal Fact Guide",
            "National Geographic Kids",
            "WWF Kids",
            "ZSL London Zoo",
            "BBC Bitesize – Animals",
            "RSPB Birds for Kids",
            ]
        
        for ( let i = 0; i < websiteNames.length; i++)
        {
            expect(screen.getByText(websiteNames[i])).toBeInTheDocument();
        }

    })

    test('the more fun website links render', async () => {
        render(<MoreFun />)

        let links = document.querySelectorAll("a")

        const expectedLinks = [
            { text: 'Visit Website', path: 'https://kids.nationalgeographic.com/' },
            { text: 'Visit Website', path: 'https://www.bbc.co.uk/bitesize' },
            { text: 'Visit Website', path: 'https://www.wwf.org.uk/gowild' },
            { text: 'Visit Website', path: 'https://www.zsl.org.uk/london-zoo' },
            { text: 'Visit Website', path: 'https://www.rspb.org.uk/fun-and-learning' },
            { text: 'Visit Website', path: 'https://animalfactguide.com/' }
        ];

        for (let i = 0; i < links.length; i++) {
            let j = links[i]
            let k = expectedLinks[i]

            expect(j.getAttribute("href")).toBe(k.path)

        }
    });
})