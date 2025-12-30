import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Footer = () => {

const [product,setproductData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const result = await axios.get('https://gympulse.onrender.com/about');
            console.log('API fetch Success');
            console.log(result.data);
            setproductData(result.data)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>

Footer

{product.map((val)=>(
    <div key={val.id}>
        <p>Hii {val.id}</p>
        <p>{val.name}</p>
    </div>
))}

        </>
    )
}

export default Footer
