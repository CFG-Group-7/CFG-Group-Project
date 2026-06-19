import "dotenv/config";
import { findAnimal, formatAnimal } from '../../src/helpers/apiHelpers.js';

export const handler = async (event) => {
    const name = event.queryStringParameters?.name?.trim();

    if (!name) {
        return {
            statusCode: 400,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ error: 'Animal name is required' })
        };

    }
    try {
        // fetching the animal data fron the API Ninjas API, using the name of the animal as a query parameter
        const response = await fetch(`https://api.api-ninjas.com/v1/animals?name=${encodeURIComponent(name)}`, {
            headers: {
                'X-Api-Key': process.env.API_NINJAS_KEY
            }
        });

        if (!response.ok) {
            return {
                statusCode: 404,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ error: 'Animal API failed to find the animal' })
            };
        }


        const data = await response.json();

        const animal = findAnimal(data, name);

        // the find function above will ensure we only return the animaal that matches the seached name exactly,
        //  this will avoid returning a wrong animal 
        //  (for example 'horse' could return 'horse fly' if not filtered properly) 
        if (!animal) {
            return {
                statusCode: 404,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ error: 'Cannot find the animal' })
            };
        }

        // destructuring the data and keeping only the relevant properties 
        const formattedAnimal = formatAnimal(animal);



        // get the image from the wikipedia API  
        const wikiResponse = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(formattedAnimal.animalName)}`);
        // if we cant find the image we will set it to null 
        if (wikiResponse.ok) {

            const wikiData = await wikiResponse.json();
            formattedAnimal.images = {
                thumbnail: wikiData.thumbnail.source || null,
                fullImage: wikiData.originalimage.source || null
            };

        }
        // not returnning a 404 error here because we can replace the failed images with placeholder images
        else {
            formattedAnimal.images = {
                thumbnail: null,
                fullImage: null

            };

        }

        // finally return the entire parsed object with all the data we got from both APIs 
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formattedAnimal)
        };
    }
    // catch any error during the fetch process 
    catch (error) {
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ error: 'Failed to fetch data' })
        };
    }
};

