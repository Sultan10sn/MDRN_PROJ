import React from 'react'

const Form = () => {
    return (
        <div className="flex items-center justify-center w-full h-screen" >
            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
                        Character name
                    </label>
                    <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="name" />
                </div>

                <div className='mb-6'>
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Choose a planet</option>
                        <option value="holth">Holth</option>
                        <option value="endor">Endor</option>
                        <option value="naboo">Naboo</option>
                        <option value="bespin">Bespin</option>
                    </select>
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="age">
                        age
                    </label>
                    <input className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="age" type="date" placeholder="age" />
                </div>
                <button className='px-3 py-2 text-gray-100 bg-gray-800 border-none rounded-lg hover:bg-slate-600'>Submit</button>
            </form>
        </div>
    )
}

export default Form