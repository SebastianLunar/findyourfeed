import axios from 'axios'

const url = "https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname";

export const GetCity = async (ciudad) => {
    const options = {
        method: 'GET',
        url: 'https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname',
        params: { name: ciudad },
        headers: {
            'X-RapidAPI-Key': '8f44de0108msh5d779779a81ce47p16771bjsn2682715a0b03',
            'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com'
        }
    };

    // try {
    //     const { data: { data } } = await axios.get(url, {
    //         params: { name: ciudad },
    //         headers: {
    //             'X-RapidAPI-Key': '8f44de0108msh5d779779a81ce47p16771bjsn2682715a0b03',
    //             'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com'
    //         }
    //     });
    //     console.log(data)
    //     return data;
    // } catch (error) {
    //     console.error("Error in data fetching")
    // }
    try {
        await axios.request(options).then(function ({ data }) {
            console.log(data)
        })
        return data;
    } catch (error) {
        console.error("Error in data fetching")
    }
    // await axios.request(options).then(function ({ data }) {
    //     console.log(data)
    //     return data;
    // }).catch(function (error) {
    //     console.error("Error in data fetching");
    // }
}
