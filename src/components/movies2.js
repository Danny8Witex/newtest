import './movies2.css'
import { useState, useEffect } from "react";
import request from 'superagent';
import { HStack } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

function Movies2() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        let name1 = 'Encanto'
        let name2 = 'Avengers'
        let name3 = 'Cloud 9'
        let name4 = 'Black hawk down'
        let name5 = 'Eagle eye'
        request
        .get("https://www.omdbapi.com/")
        .query({ apikey: '7750ce49' })
        .query({ t: name1 })
        .then((data) => {
            //console.log(data.body)
            const moviesData = {};
            moviesData.img = data.body.Poster;
            moviesData.title = data.body.Title;
            setMovies(movies => [...movies,moviesData] );
        })
        .catch(async (error) => {
            alert(error.message)
        })
        request
        .get("https://www.omdbapi.com/")
        .query({ apikey: '7750ce49' })
        .query({ t: name2 })
        .then((data) => {
            //seriesArr.push(data.body.Title)
            const moviesData = {};
            moviesData.img = data.body.Poster;
            moviesData.title = data.body.Title;
            setMovies(movies => [...movies,moviesData] );
        })
        .catch(async (error) => {
            alert(error.message)
        })
        request
        .get("https://www.omdbapi.com/")
        .query({ apikey: '7750ce49' })
        .query({ t: name3 })
        .then((data) => {
            //seriesArr.push(data.body.Title)
            const moviesData = {};
            moviesData.img = data.body.Poster;
            moviesData.title = data.body.Title;
            setMovies(movies => [...movies,moviesData] );
        })
        .catch(async (error) => {
            alert(error.message)
        })
        request
        .get("https://www.omdbapi.com/")
        .query({ apikey: '7750ce49' })
        .query({ t: name4 })
        .then((data) => {
            //seriesArr.push(data.body.Title)
            const moviesData = {};
            moviesData.img = data.body.Poster;
            moviesData.title = data.body.Title;
            setMovies(movies => [...movies,moviesData] );
        })
        .catch(async (error) => {
            alert(error.message)
        })
        request
        .get("https://www.omdbapi.com/")
        .query({ apikey: '7750ce49' })
        .query({ t: name5 })
        .then((data) => {
            //seriesArr.push(data.body.Title)
            const moviesData = {};
            moviesData.img = data.body.Poster;
            moviesData.title = data.body.Title;
            setMovies(movies => [...movies,moviesData] );
        })
        .catch(async (error) => {
            alert(error.message)
        })
        //console.log(series)
    }, [])

    //console.log(seriesArr)
   // console.log(series)
    

    return (
        <div className='movies2-section'>
            <p>Movies</p>
            <div className='movies-scroll'>
            <HStack spacing='10px'>
                {movies.map((items, i) => {
                    return (
                        <Box 
                            className='movies-div' 
                            key={i}
                        >
                            <img src={items.img} className="movies-img" />
                            {/* <p className='series-text'>{items.title}</p> */}
                        </Box>
                    )
                })
                }
                
                </HStack>
            </div>
        </div>
    )
}

export default Movies2;