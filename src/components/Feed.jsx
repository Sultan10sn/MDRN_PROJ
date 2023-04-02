import React from 'react'
import { Link } from 'react-router-dom'
import { imgs } from '../imgs'

//feed component
const Feed = ({ name, rotation_period, diameter, climate, id }) => {
    // index id is used instead of json data id, since the json data has no id that enbable modification (deletion and updating)   
    const idx = id + 1

    return (
        <div className="max-w-sm overflow-hidden rounded shadow-lg">
            <Link to={`/detail/${idx}`}>
                <img src={imgs[idx]} />

                <div className="px-6 py-2">
                    <div className="text-xl font-bold">{name}</div>
                </div>
                <div className="px-6 pt-1 pb-2">
                    <p>{rotation_period}</p>
                    <p>{climate}</p>
                    <p> {diameter}</p>
                </div>
            </Link>
        </div>
    )
}

export default Feed