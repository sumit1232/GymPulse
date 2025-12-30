import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Footer = () => {

const [product,setproductData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const result = await axios.get('http://localhost:3000/members');
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
        <p>{val.firstName}</p>
    </div>
))}

        </>
    )
}

export default Footer
