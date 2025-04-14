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
        },
        {
            id: '4',
            name: 'Rajan',
            image: './image/man3.png',
            designation: 'Frontend Developer'
        },
        {
            id: '5',
            name: 'Sandeep',
            image: './image/man2.png',
            designation: 'Backend Developer'
        },
        {
            id: '6',
            name: 'Abhishek',
            image: './image/man1.png',
            designation: 'Fullstack Developer'
        }
    ]

    return (
        <section className='px-4 max-w-[1200px] mx-auto py-10 mt-18'>
            <div className="flex justify-center">
                <h2 className='text-3xl font-semibold mb-18 capitalize'>Meet Our Team</h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {team.map((elem) => (
                    <li key={elem.id} 
                        className='flex flex-col justify-center border border-[#c9c7c7] 
                                    items-center gap-6 p-6 bg-gradient-to-b to-10% 
                                    from-red-400 via-40% from-10% via-red-200 
                                    to-blue-500 shadow-lg rounded-xl transform hover:scale-105 
                                    transition-all'
                        >
                        <div className="flex h-32 w-32  bg-white rounded-full overflow-hidden mb-4">
                            <img src={elem.image} alt={elem.name} className='h-full w-full object-cover' />
                        </div>
                        <div className='text-center'>
                            <h3 className="font-semibold text-2xl text-white capitalize">mr. {elem.name}</h3>
                            <p className="text-lg text-white">{elem.designation}</p>
                        </div>
                        
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Team
