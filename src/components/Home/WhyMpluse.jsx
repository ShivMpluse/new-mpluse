import  card from '../../../public/image/Dashboard-card.svg'
import { MdCloudDone } from "react-icons/md"
import { MdOutlineInsights } from "react-icons/md"
import { LuGitCompareArrows } from "react-icons/lu"

const WhyMpluse = () => {

    // const data = [
    //     {
    //         id: "1",
    //         title: "Payments",
    //         description: "Secure, fast, and seamless payments for effortless financial transactions.",
    //         icon: <MdCloudDone size={32} className="text-green-500" />
    //     },
    //     {
    //         id: "2",
    //         title: "Payouts",
    //         description: "Instant, reliable payouts to users, vendors, or partner accounts anytime.",
    //         icon: <MdOutlineInsights size={32} className="text-blue-500" />
    //     },
    //     {
    //         id: "3",
    //         title: "Subscriptions",
    //         description: "Flexible billing and automated renewals for consistent service delivery.",
    //         icon: <LuGitCompareArrows size={32} className="text-purple-500" />
    //     }
    // ]

    return (
        <section className='max-w-[1400px] mx-auto p-4 '>
            {/* <h1 className="text-4xl font-bold my-10 ">Why Mpluse</h1> */}
            <div className="grid grid-cols-1 md:grid-cols-2 mx-auto ">
                <div className="flex flex-col gap-4 justify-center mx-auto ">
                    <div className="flex flex-col gap-3 ">
                        <h1 className="text-4xl font-bold my-10 capitalize" >why choose Mpluse ? </h1>
                        <h2 className="text-2xl font-semibold capitalize">build product faster</h2>
                        <p className="text-normal capitalize font-[500] text-[#575656]">Mpluse’s platform offers scalable reach, optimized builds, and smart financial plans. </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h2 className="text-2xl font-semibold capitalize">optimize revenue</h2>
                        <p className="text-normal capitalize font-[500] text-[#575656]">Mpluse Fintech Pvt Ltd provides UPI services for your cash payments. </p>
                    </div>
                </div>
                <div className="flex py-8 md:py-0">
                    <img src={card} alt="card" className='md:max-h-[400px] mx-auto' />
                </div>
            </div>
            {/* <ul className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {data.map((item) => (
                    <li key={item.id} className="p-6 flex flex-col justify-center items-center bg-white border border-[#9f9e9e] rounded-lg shadow-md hover:shadow-lg transition duration-200">
                        <div className="mb-4">{item.icon}</div>
                        <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                        <p className="text-gray-600 text-sm text-center ">{item.description}</p>
                    </li>
                ))}
            </ul> */}
        </section>
    )
}

export default WhyMpluse
