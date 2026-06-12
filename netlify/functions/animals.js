import "dotenv/config";

export const handler = async (event) => {
    const name = event.queryStringParameters?.name?.trim();

    if (!name) {
        return {
            statusCode: 400,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ error: 'Animal name is required' })
        }

    }
    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/animals?name=${encodeURIComponent(name)}`, {
            headers: {
                'X-Api-Key': process.env.API_NINJAS_KEY
            }
        });


        const data = await response.json();
        const filteredData = data.filter(animal => animal.name.toLowerCase() === name.toLowerCase());
        // the filter above will ensure we only return the exact match,
        //  as API has a lot animals that have the name as part of their name
        //  (for example 'horse' can return 'horse fly')
        const {
            name: animalName,
            locations,
            characteristics: {
                prey,
                name_of_young,
                group_behavior,
                habitat,
                diet,
                predators,
                most_distinctive_feature,
                location,
                slogan,
                group,
                top_speed,
                lifespan,
                length,
                weight
            }
        } = filteredData[0];
        const responseData = {
            animalName,
            locations,
            characteristics: {
                prey, name_of_young, group_behavior,
                habitat, diet, predators, most_distinctive_feature, location, slogan, group,
                top_speed, lifespan, length, weight
            }
        };
        return {
            statusCode: response.status,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(responseData)
        }
    }
    catch (error) {
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ error: 'Failed to fetch data' })
        }
    }
}

