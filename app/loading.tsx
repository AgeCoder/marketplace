import { Loader } from 'lucide-react'
import React from 'react'

const loading = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex space-x-2 animate-spin">
                <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-blue-500 rounded-full  animate-pulse"></div>
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full  animate-pulse">
                    {/* <Loader color="#01b2fe" className='animate-spin' /> */}
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-fuchsia-500 to-amber-500 rounded-full  animate-pulse"></div>
            </div>
        </div>
    )
}

export default loading
