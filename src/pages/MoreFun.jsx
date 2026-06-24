import React from "react";

{/* Array of resources with links and descriptions */}
const resources = [
  {
    title: "BBC Wildlife",
    description: "Learn about animals, habitats, and conservation.",
    url: "https://www.bbc.co.uk/nature",
  },
  {
    title: "National Geographic Kids",
    description: "Amazing animal facts, videos, and pictures from around the world!",
    url: "https://kids.nationalgeographic.com/",
  },
  {
    title: "WWF",
    description: "Discover more facts, puzzles, games and activities about wildlife.",
    url: "https://www.wwf.org.uk/gowild",
  },
  {
    title: "ZSL London Zoo",
    description: "Visit the website of one of the world's oldest zoos and meet their animals!",
    url: "https://www.zsl.org.uk/london-zoo",
  },
];

const MoreFun = () => {
  return (
    <main className="page-shell"> {/* Page colour and padding */}
      <section className="page-container text-center">
        <div className="mb-8">
          <h1 className="page-title mb-4">
            Learn more
          </h1>

          <p className="mx-auto max-w-3xl text-xl">
            Click the links below to visit amazing websites about animals and nature!
          </p>

    {/* Safety warning for children visiting new websites with styling */}
          <p className="mx-auto mt-5 inline-block rounded-lg bg-orange px-6 py-3 text-lg">
            Ask a grown-up before visiting a new website.
          </p>
        </div>

        {/* Responsive layout with styling */}
        <ul className="grid list-none gap-6 p-0 md:grid-cols-2">
          {resources.map((item, index) => (
            <li
              key={index}
              className="flex min-h-56 flex-col items-center justify-between rounded-[2rem] bg-yellow p-7 text-center shadow-sm"
            >
             { /* Text within each card with styling */ }
              <div>
                <h2 className="mb-3 text-3xl font-medium text-fontColour">
                  {item.title}
                </h2>

                <p className="text-lg leading-snug text-fontColour">
                  {item.description}
                </p>
              </div>

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full rounded-xl bg-dark-green px-8 py-3 text-lg font-bold text-white shadow-md hover:scale-105 hover:brightness-110 sm:max-w-md"
              >
                Visit Website
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default MoreFun;


