import axios from 'axios'

const url = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const GetPlaces = async (sw, ne) => {
    try {
        const { data: { data } } = await axios.get(url, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lon,
                tr_longitude: ne.lon,
            },
            headers: {
                'X-RapidAPI-Key': '8fb545cf07msh7dcc7e73adab9bcp13b1acjsnc5bcdeb7461d',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });
        return data;
    } catch (error) {
        console.error("Error in data fetching")
    }
}
