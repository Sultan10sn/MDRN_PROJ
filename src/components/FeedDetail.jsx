import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import Error from './Error'
import Spinner from './Spinner'
// array images
import { imgs } from '../imgs'

const FeedDetail = () => {

    const [planet, setPlanet] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    const location = useLocation();
    const id = location.pathname.split("/")[2]

    // fetching individual planet
    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await fetch(`https://swapi.dev/api/planets/${id}/`)
                const data = await res.json()
                setPlanet(data)
                setLoading(false)
                setError(false)
            } catch (err) {
                setError(err)
                setLoading(false)
            }
        }
        fetchData()
    }, [id])
    // loading condition
    if (loading) return <Spinner />
    // error condition
    if (error) return <Error />
    return (
        <div className='flex flex-col items-center justify-between h-auto md:flex-row'>
            <div className='flex-1 p-10'>
                <img className='border rounded-lg' src={imgs[id]} />
            </div>
            <div className='flex items-center justify-start flex-1 p-3'>
                <div>
                    <h1 className='text-xl font-small'><span className='text-xl font-bold'> Name:</span> {planet?.climate}</h1>
                    <p className='text-xl font-small'> <span className='text-xl font-bold'>Population:</span> {planet?.population}</p>
                    <p className='text-xl font-small'> <span className='text-xl font-bold'> Climate:</span> {planet?.climate}</p>
                </div>
            </div>
        </div>
    )
}

export default FeedDetail