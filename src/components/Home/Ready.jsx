import React from 'react'
import Button from '../Button'

const Ready = () => {
    return (
        <section className='max-w-[1400px] mx-auto py-10'>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col">
                    <h1 className="text-4xl capitalize">ready to get started</h1>
                    <p className="flex">
                        create an account and start accepting payments today.
                    </p>
                </div>
                <div className="btn">
                    <Button className="bg-[#b5001e]" text="Sign UP" />
                </div>
            </div>
        </section>
    )
}

export default Ready
