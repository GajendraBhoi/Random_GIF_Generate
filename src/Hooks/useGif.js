import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
 
const useGif = (tag) => {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(true);

    async function fetchData() {
        setLoading(true);
        const output = await axios.get(tag ? `${url}&tag=${tag}` : url);
        const h = output.data.data.images.downsized_large.url;
        setGif(h);
        console.log(h);
        setLoading(false);
    }

    useEffect(() => { fetchData() }, []);


    return { gif, loading, fetchData }

};

export default useGif;
