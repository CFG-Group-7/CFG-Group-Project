import React from "react";

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
    <div>
        <h1>Learn more</h1>

      <p>Click the links below to visit amazing websites about animals and nature!</p>

      <p>Ask a grown-up before visiting a new website.</p>

 <ul>
 {resources.map((item, index) => (
    <li key={index}>
        <h2>{item.title}</h2>

        <p>{item.description}</p>

        <a href={item.url} target="_blank" rel="noopener noreferrer" >
            <button>
            Visit Website
            </button>
        </a>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoreFun;