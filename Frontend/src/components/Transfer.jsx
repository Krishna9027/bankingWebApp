import React from 'react'

function Transfer() {
    return (
        <>
            <div className="flex flex-col mt-20 min-h-screen  ">
                <div className="max-w-xl mx-auto my-20 p-5 bg-white rounded-lg items-center justify-center shadow-md">
                    <h2 className="mb-5 text-2xl font-semibold text-gray-700 text-center ">
                        Transfer Money
                    </h2>
                    <div>

                    </div>
                    <div className="mt-4">
                        <label htmlFor="from"
                            className="block text-sm font-medium text-gray-700"
                        >
                            From:
                        </label>
                        <input type="number"
                            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-2 focus:ring-indigo-500 mt-1 "
                        />


                    </div>
                    <div className="mt-4">
                        <label htmlFor="to"
                            className="block text-sm font-medium text-gray-700"
                        >
                            To:
                        </label>
                        <input type="number"
                            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-2 focus:ring-indigo-500 mt-1 "
                        />


                    </div>
                    <div className="mt-4">
                        <label htmlFor="amount"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Amount:
                        </label>
                        <input type="number"
                            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-2 focus:ring-indigo-500 mt-1 "
                        />


                    </div>
                    <div className="flex justify-end mt-6">
                        <button className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none  focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"> Transfer </button>
                    </div>

                </div>
            </div>
        </>

    )
}

export default Transfer
