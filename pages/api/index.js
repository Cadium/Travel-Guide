import axios from "axios";

const url =
    "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async(type, sw, ne) => {
    try {
        const {
            data: { data },
        } = await axios.get(
            `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
                params: {
                    bl_latitude: sw.lat,
                    tr_latitude: ne.lat,
                    bl_longitude: sw.lng,
                    tr_longitude: ne.lng,
                },
                headers: {
                    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
                    "x-rapidapi-key": "6a49cd4635msh3bcfaf95c563f52p117e78jsnd0aae5cc79f7",
                },
            }
        );
        return data;
    } catch (error) {
        console.log(`Fetch data Error : ${error}`);
    }
};