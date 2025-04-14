import React from 'react'

const OurMission = () => {
    return (
        <section className='px-4 max-w-[1200px] mx-auto  mt-18'>
            <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
                <div>
                <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                    We are dedicated to delivering high-quality, user-focused solutions that make a difference.
                    Our mission is to simplify technology and bring positive change through design and functionality.
                </p>
                </div>
                <div>
                <img
                    src="https://source.unsplash.com/600x400/?teamwork,technology"
                    alt="Mission"
                    className="rounded-lg shadow-lg"
                />
                </div>
            </section>

        </section>
    )
}

export default OurMission
