// Array of resources with links and descriptions
const resources = [
  {
    title: "National Geographic Kids",
    description: "Amazing animal facts, videos, and pictures from around the world!",
    url: "https://kids.nationalgeographic.com/",
  },
  {
    title: "BBC Bitesize – Animals",
    description: "Easy to understand guides about habitats and how animals survive!",
    url: "https://www.bbc.co.uk/bitesize",
  },
  {
    title: "WWF Kids",
    description: "Learn about endangered animals and how we can help protect them!",
    url: "https://www.wwf.org.uk/gowild",
  },
  {
    title: "ZSL London Zoo",
    description: "Visit the website of one of the world's oldest zoos and meet their animals!",
    url: "https://www.zsl.org.uk/london-zoo",
  },
  {
    title: "RSPB Birds for Kids",
    description: "Discover amazing British birds and wildlife with fun activities!",
    url: "https://www.rspb.org.uk/fun-and-learning",
  },
  {
    title: "Animal Fact Guide",
    description: "Simple, fact-packed animal profiles written just for young learners!",
    url: "https://animalfactguide.com/",
  },
];


const MoreFun = () => {
return (
  <main className="min-h-screen bg-pale-green py-12 px-6 md:px-12">
    <section className="mx-auto max-w-7xl text-center">
      {/* Page intro section */}
      <div className="mb-10">
        <h1 className="mb-4 text-4xl font-bold text-fontColour md:text-5xl">
          Learn more
        </h1>

        <p className="mx-auto max-w-3xl text-lg text-fontColour md:text-xl">
          Click any card below to visit amazing websites about animals!
        </p>

        <p className="mx-auto mt-5 inline-block rounded-xl bg-orange px-6 py-2 text-base text-fontColour">
          Ask a grown-up before visiting a new website.
        </p>
      </div>

      {/* Resource cards */}
      <ul className="mx-auto grid max-w-6xl list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((item, index) => (
          <li
            key={index}
            className="flex min-h-44 flex-col items-center justify-between rounded-xl bg-yellow p-6 text-center shadow-sm"
          >
            <div>
              <h2 className="mb-3 text-xl font-medium text-fontColour">
                {item.title}
              </h2>

              <p className="mb-5 text-base leading-snug text-fontColour">
                {item.description}
              </p>
            </div>

              {/*Opening new tabs with security*/}
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl bg-dark-green px-8 py-2 text-base font-bold text-pale-yellow hover:scale-105 hover:brightness-110"
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