
export default function FlashCard({ animal }) {

    return (
        <div className="hover-3d">

            {/* <h1>{animal.animalName}</h1> */}
            {/* <img src={animal.images.thumbnail}></img> */}
            {/* <p>{animal.characteristics.location}</p> */}

            <figure className="max-w-120 max-h-160 rounded-2xl">
                <img src={animal.images.fullImage} alt="3D card" />
            </figure>
            {/* 8 empty divs needed for the 3D effect */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>






    )



}