import { useState } from "react";

export default function FlashCard({ animal }) {
    const [flipped, setFlipped] = useState(false);

    // 4 facts for the back of the card 
    const facts = [
        { label: "Diet", value: animal.characteristics.diet },
        { label: "Habitat", value: animal.characteristics.habitat },
        { label: "Lifespan", value: animal.characteristics.lifespan },
        { label: "Top speed", value: animal.characteristics.top_speed },
        { label: "Group", value: animal.characteristics.group },
    ].filter((fact) => fact.value).slice(0, 4);

    const image = animal.images.fullImage || animal.images.thumbnail; // a fallback in case some animals don't have a full image



    return (
        // OUTER: sets the 3D perspective + the card's size.
        <div
            className="[perspective:1000px] h-160 w-120 cursor-pointer select-none"
            onClick={() => setFlipped((isFlipped) => !isFlipped)}
        >
            {/* INNER: the bit that rotates. duration-700 = flip speed. */}
            <div
                className={
                    "relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] " +
                    (flipped ? "[transform:rotateY(180deg)]" : "")
                }
            >
                {/* FRONT — name + image */}
                <div className="flex inset-0 flex flex-col items-center justify-center gap-4 rounded-2xl bg-blue p-6 shadow-xl [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
                    <h2 className="text-2xl font-bold text-fontColour">
                        {animal.animalName}
                    </h2>

                    <img
                        src={image}
                        alt={animal.animalName}
                        className="h-129 w-100 object-contain" // object-contain is the only option that works best with our images which have different sizing
                    />

                    <p className="text-sm text-fontColour">Tap to flip</p>
                </div>

                {/* BACK — pre-rotated 180° so it faces away until flipped */}
                <div className="absolute inset-0 flex flex-col items-center gap-3 overflow-auto rounded-2xl bg-emerald-50 p-6 shadow-xl [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <h2 className="text-xl font-bold text-gray-800">
                        {animal.animalName}
                    </h2>
                    <img
                        src={image}
                        alt={animal.animalName}
                        className="h-60 w-60 rounded-lg object-cover"
                    />
                    <ul className="w-full space-y-1 text-sm text-gray-700">
                        {facts.map((fact) => (
                            <li
                                key={fact.label}
                                className="flex justify-between border-b border-blue py-1" // the border colour might need to change if the background colour changes 
                            >
                                <span className="font-semibold">{fact.label}</span>
                                <span className="text-right opacity-80">{fact.value}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}


