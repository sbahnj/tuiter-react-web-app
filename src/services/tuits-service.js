import axios from "axios";
const TUITS_API = 'http://localhost:4000/api/tuits';

export const findTuits = async () => {
    const response = await axios.get(TUITS_API);
    const tuits = response.data;
    return tuits;
}



