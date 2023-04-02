import React, { useEffect, useState } from 'react'
import Error from './Error'
import Feed from './Feed'
import Spinner from './Spinner'

// all feed container
const ListFeeds = () => {

    const [planets, setPlanets] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    // initial fetches data that show all the planets
    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await fetch('https://swapi.dev/api/planets/?format=json')
                const data = await res.json()
                console.log(data)
                setPlanets(data.results)
                setLoading(false)
                setError(false)
            } catch (err) {
                setError(err)
                setLoading(false)
            }
        }

        fetchData()
    }, [])
    // loading conidtion
    if (loading) return <Spinner />
    // error conidtion
    if (error) return <Error />


    return (

        <>
            <h1 className='py-4 text-xl font-bold text-center'>All Planets</h1>
            <div className='container grid grid-cols-1 gap-4 px-10 py-10 m-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {   // rendering the fetched data
                    planets.length > 0 && planets.map((planet, i) => (
                        <Feed key={i} {...planet} id={i} />
                    ))
                }
            </div>

        </>
    )
}

export default ListFeeds