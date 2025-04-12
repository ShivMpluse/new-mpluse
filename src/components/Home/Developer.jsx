import React from 'react'
import Button from '../Button'
import man from '../../../public/image/human.png'

const Developer = () => {
    return (
        <section className='px-4 max-w-[1200px] mx-auto  my-18'>
            <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-8 ">
                <div className="flex flex-col items-start px-10 gap-6">
                    <h1 className="text-4xl font-semibold my-10 capitalize" >developer friendly API's </h1>
                    <p className='text-lg mt-4 max-w-md font-sans font-[400] text-black'>
                        comprehensive API documentation and client libraries for eCommerce all major language
                    </p>
                    <div className="flex flex-wrap justify-between gap-10">
                        <Button text="Create Account" className="bg-blue-500 capitalize text-white" />
                        <Button text="schedule a demo" className="capitalize 0 border" />
                    </div>
                </div>
                <div className="flex justify-center items-end">
                    <div className=" w-80 h-80 my-auto rounded-full flex items-center justify-center">
                        <img src={man} alt="" className='h-full my-auto object-cover' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Developer
