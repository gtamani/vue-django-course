import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [resolved, setResolved] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async (url) => {
            try{

                let res = await fetch(url)
                if (!res.ok) {
                    throw {
                        err:true,
                        status:res.status,
                        statusText:!res.statusText ? "Error!" : res.statusText
                    };
                }
                let data = await res.json();
                
                setData(data);
                setResolved(true);
                setError({err:false});

            } catch (err) {
                setResolved(false);
                setError(err)
            }
        }
        getData(url);
    },[url])

    // Todo custom hook debería retornar algo
    return { data, resolved, error }
}