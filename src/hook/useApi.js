import axios from "axios";
import { useEffect, useState } from "react";
export const useApi = ( url ) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${url}`);
            console.log(response)
            setData(response.data);
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [url])

    const findByTypeId = async (typeId) => {
        try { 
            const response = await axios.get(`${url}?type=${typeId}`);
            setData(response.data);
        } catch (error) {
            setError(error)
        }
    }

    const setLikeProduct = async (id, status) => {
        try {
            const response = await axios.put(`${url}/${id}`, {like: status});
            console.log(response)
        } catch (error) {
            setError(error)
        }
    }
    return {fetchData, findByTypeId, setData, data, setLikeProduct}
}