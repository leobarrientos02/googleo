import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();

const baseURL = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('Elon Musk');

    // /videos, /search, /images
    const getResults = async (type) => {
        setIsLoading(true);

        const response = await fetch(`${baseURL}${type}`, {
            method: 'GET',
            headers: {
                'x-user-agent': 'desktop',
                'x-proxy-location': 'EU',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': '944eebcefemshb5e6f9ed931ad35p11fa93jsnce2382f2a475'
              }
        });

        const data = await response.json();
        
        // console.log({type, data});
        
        if(type.includes('/news')){
            //console.log({data});
            setResults(data.entries);
        } else if( type.includes('/images')){
            setResults(data.image_results);
        } else {
            setResults(data.results);
        }

        // setResults(data);
        setIsLoading(false);
    }
    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </ResultContext.Provider>
    );
}

export const useResultContext = () => useContext(ResultContext);