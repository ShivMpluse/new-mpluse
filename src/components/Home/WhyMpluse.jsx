import React from 'react'
import { MdCloudDone } from "react-icons/md"
import { MdOutlineInsights } from "react-icons/md"
import { LuGitCompareArrows } from "react-icons/lu"

const WhyMpluse = () => {

    const data = [
        {
            id: "1",
            title: "Payments",
            description: "Secure, fast, and seamless payments for effortless financial transactions.",
            icon: <MdCloudDone size={32} className="text-green-500" />
        },
        {
            id: "2",
            title: "Payouts",
            description: "Instant, reliable payouts to users, vendors, or partner accounts anytime.",
            icon: <MdOutlineInsights size={32} className="text-blue-500" />
        },
        {
            id: "3",
            title: "Subscriptions",
            description: "Flexible billing and automated renewals for consistent service delivery.",
            icon: <LuGitCompareArrows size={32} className="text-purple-500" />
        }
    ]

    return (
        <section className='max-w-[1400px] mx-auto p-4'>
            <h1 className="text-4xl font-bold my-10 text-center">Why Mpluse</h1>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {data.map((item) => (
                    <li key={item.id} className="p-6 flex flex-col justify-center items-center bg-white border border-[#9f9e9e] rounded-lg shadow-md hover:shadow-lg transition duration-200">
                        <div className="mb-4">{item.icon}</div>
                        <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                        <p className="text-gray-600 text-sm text-center ">{item.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default WhyMpluse
