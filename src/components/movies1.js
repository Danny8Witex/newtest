import './movies1.css'
import { useState, useEffect } from "react";
import request from 'superagent';
import { HStack } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

function Movies1() {
    const [series, setSeries] = useState([])

    useEffect(() => {
        let name1 = 'Vikings'
        let name2 = 'How i met your mother'
        let name3 = 'Vampire diaries'
        let name4 = 'The originals'
        let name5 = 'Money heist'
        request
        .get("https://www.omdbapi.com/")
        .query({ apikey: '7750ce49' })
        .query({ t: name1 })
        .then((data) => {
            //console.log(data.body)
            const seriesData = {};
            seriesData.img = data.body.Poster;
            seriesData.title = data.body.Title;
            setSeries(series => [...series,seriesData] );
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
            const seriesData = {};
            seriesData.img = data.body.Poster;
            seriesData.title = data.body.Title;
            setSeries(series => [...series,seriesData] );
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
            const seriesData = {};
            seriesData.img = data.body.Poster;
            seriesData.title = data.body.Title;
            setSeries(series => [...series,seriesData] );
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
            const seriesData = {};
            seriesData.img = data.body.Poster;
            seriesData.title = data.body.Title;
            setSeries(series => [...series,seriesData] );
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
            const seriesData = {};
            seriesData.img = data.body.Poster;
            seriesData.title = data.body.Title;
            setSeries(series => [...series,seriesData] );
        })
        .catch(async (error) => {
            alert(error.message)
        })
        //console.log(series)
    }, [])

    //console.log(seriesArr)
   // console.log(series)
    

    return (
        <div className='movies1-section'>
            <p>Series</p>
            <div className='series-scroll'>
            <HStack spacing='10px'>
                {series.map((items, i) => {
                    return (
                        <Box 
                            className='series-div' 
                            key={i}
                        >
                            <img src={items.img} className="series-img" />
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

export default Movies1;