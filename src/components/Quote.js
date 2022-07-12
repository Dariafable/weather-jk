import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {QuoteContainer, Text} from './QuoteStyles'

//const url = 'https://www.breakingbadapi.com/api/quotes'; 
const url2 = 'https://api.chucknorris.io/jokes/random';

const Quote = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
      getALL(); 
    }, [])

    const getALL = async () => {
      const { data } = await axios.get(url2);
      //console.log(data);
      setData(data);
    };
    
    if (!data) return null
  
  return (
    <QuoteContainer>
     <Text>{data.value}</Text>
   {/* <Text>- {data[0].author}</Text> */} 
    </QuoteContainer>
  )
}

export default Quote
