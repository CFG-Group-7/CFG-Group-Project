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
                <div className="flex inset-0 flex-col items-center justify-center rounded-2xl bg-blue p-6 shadow-xl [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
                    <h2 className="text-2xl font-bold text-fontColour">
                        {animal.animalName}
                    </h2>

                    <img
                        src={image}
                        alt={animal.animalName}
                        className="h-129 w-100 object-contain" // object-contain is the only option that works best with our images which have different sizing
                    />

                    <p className="text-sm text-fontColour">Click to flip!</p>
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
                    <div class="grid grid-cols-2 gap-4 mt-6 md:gap-6 ">
                        {facts.map((fact) => (
                            <div
                                key={fact.label}
                                className="bg-blue-400 text-white rounded-xl p-4 text-center min-h-26 flex flex-col justify-center"
                            >
                                <h1 className="font-bold">{fact.label}</h1>
                                <p className="text-sm">{fact.value}</p>
                            </div>
                        ))}
                        {/* </ul> */}
                    </div>
                </div>
            </div>
        </div>
    );
}


