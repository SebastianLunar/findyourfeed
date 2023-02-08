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
                'X-RapidAPI-Key': '8f44de0108msh5d779779a81ce47p16771bjsn2682715a0b03',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });
        return data;
    } catch (error) {
        console.error("Error in data fetching")
    }
}
