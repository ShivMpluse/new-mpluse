import { ImLoop } from "react-icons/im";
import { MdOutlineUpgrade } from "react-icons/md";
import { IoSettings } from "react-icons/io5";

const Howwork = () => {

    const data = [
        {
            id: 1,
            title: 'integrate',
            description: "Seamless API integration for smooth and scalable connectivity.",
            icon: <ImLoop size={32} className="text-green-500" />
        },
        {
            id: 2,
            title: 'go live',
            description: "Launch your service live with speed and confidence.",
            icon: <MdOutlineUpgrade size={32} className="text-blue-500" />
        },
        {
            id: 3,
            title: 'start acepring',
            description: "Start accepting payments globally with secure API integration.",
            icon: <IoSettings size={32} className="text-purple-500" />
        },
    ]

    return (
        <section className='max-w-[1400px] mx-auto py-10'>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    data.map((item) => (
                        <li key={item.id}  className="border border-[#e7e7e7] p-8 shadow-lg">
                            <div className="flex flex-col gap-4 items-center">
                                <span className="p-4 border border-[#dcd6d6] shadow-md rounded-full animate-pulse">{item.icon}</span>
                                <h2 className="text-2xl">{item.title}</h2>
                                <p className="text-lg text-center">{item.description}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Howwork
