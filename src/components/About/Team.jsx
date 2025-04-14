
import React from 'react'

const Team = () => {

    const team = [
        {
            id: '1',
            name: 'Rajan',
            image: './image/man1.png',
            designation: 'Frontend Developer'
        },
        {
            id: '2',
            name: 'Sandeep',
            image: './image/human.png',
            designation: 'Backend Developer'
        },
        {
            id: '3',
            name: 'Abhishek',
            image: './image/man3.png',
            designation: 'Fullstack Developer'
        }
    ]

    return (
        <section className='px-4 max-w-[1200px] mx-auto py-10 mt-18'>
            <div className="flex justify-center">
                <h2 className='text-3xl font-semibold mb-18 capitalize'> meet our team</h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {team.map((elem)=>(
                    <li key={elem.id} className='flex flex-col justify-center items-center gap-10 p-6 shadow-2xl'>
                        <div className="flex h-32 w-32 ">
                            <img src={elem.image} alt={elem.name} className='h-auto w-auto shadow-lg  rounded-full' />
                        </div>
                        <h3 className="font-semibold text-2xl">Mr. {elem.name}</h3>
                        <p>{elem.designation}</p>
                    </li>
                ))}
            </ul>
            
        </section>
    )
}

export default Team
