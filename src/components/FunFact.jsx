export default function FunFact() {


    const factList = [
        "A giraffe has seven bones in its neck, which is the same as a human has, but they are much larger.",
        "A jaguar can see in the dark six times better than a human.",
        "Koalas have unique fingerprints.",
        "Sea otters hold hands while sleeping.",
        "Platapus glow blue under UV light",
        "To hover, hummingbirds may beat their wings up to 200 times per second.",
        "The lion has the loudest roar of all the big cats. It can be heard as far as 5km (3 miles) away.",
        "Rats are ticklish, and they laugh when they are tickled.",
        "The chicken is the closest living relative to the T-Rex.",
        "Octopuses have nine brains. (And cows have four stomachs!)",
        "Jellyfish have no brain, heart, bones, or eyes, and they’ve been around since before the dinosaurs.",
        "Great white sharks have over 300 teeth arranged in up to seven rows, and they grow new teeth almost constantly.",
        "Hummingbirds lay some of the smallest eggs of any bird—the smallest are the size of a pea.",
        "Owls can turn their heads almost 360 degrees (a complete circle) but they cannot move their eyes.",
        "Mockingbirds can imitate many sounds, from a squeaking door to a cat meowing.",
        "An ostrich's eyes are bigger than its brain."

    ];


    const index = Math.floor(Math.random() * factList.length);


    return (
        <section className="mx-auto max-w-6xl rounded-[2rem] bg-orange px-8 py-12 text-center shadow-sm md:px-16 md:py-16">
            <h2 className="mb-6 text-3xl font-medium text-fontColour">
                Fun Fact!
            </h2>


            <p className="mx-auto max-w-3xl text-xl text-fontColour">
                {factList[index]}
            </p>
        </section>
    );

}