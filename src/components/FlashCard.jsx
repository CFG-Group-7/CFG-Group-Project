export default function FlashCard({ animal }) {

    if (!animal || typeof animal === "string") {
        return <p>Loading...</p>;
    }


    return (
        <>

            <h1>{animal.animalName}</h1>
            <img src={animal.images.thumbnail}></img>
            <p>{animal.characteristics.location}</p>

        </>
    )



}