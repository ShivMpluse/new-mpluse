import React from 'react';
import Button from '../../UI/Button';

const ApiIntegrationComponent = ({
    mainbg,
    cardDesign,
    APIcard
}) => {
    const features = [
        {
            title: "RESTful APIs",
            description: "Simple HTTP endpoints with JSON responses",
        },
        {
            title: "Sandbox Access",
            description: "Test integration with sample data before going live",
        },
        {
            title: "Full Documentation",
            description: "Comprehensive guides and code examples",
        },
        {
            title: "Developer Support",
            description: "Dedicated technical support for integration",
        }
    ];


    const text = "Our RESTful APIs are designed to be easy to integrate with minimal code. Get started in minutes with comprehensive documentation and sandbox access."

    return (
        <div class={`${mainbg}`}>
            <section className='max-w-[1200px] mx-auto p-4 py-10' >
                <div class="flex flex-col gap-2">
                    <h1 className='text-center font-bold text-3xl'>Easy API Integration</h1>
                    <p className='text-center m-3 max-w-[600px] mx-auto my-8'>
                        {text}
                    </p>
                </div>
                

                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 p-4 ' >
                    <div class="flex flex-col gap-8 ">
                        <div className={`text-[#a5f3fc] py-18 px-16 rounded-lg ${APIcard}`}>
                            <p><strong className={`text-[#facc15]`}>GET</strong> <span className='text-[#facc15]'>https://api.mpluse.com/v1/gst/verify</span></p>
                            <p><strong>Headers:</strong><br />
                                Authorization: Bearer YOUR_API_KEY<br />
                                Content-Type: application/json
                            </p>
                            <p><strong>Request:</strong><br />
                                {`{ \n"gstin": "29AABCR1234A1Z5"\n}`}
                            </p>
                            <p><strong>Response:</strong><br />
                                {`{
                                    "status": "active",
                                    "legal_name": "ACME ENTERPRISES PVT LTD",
                                    "trade_name": "ACME",
                                    "address": "123 BUSINESS PARK, BANGALORE",
                                    "registration_date": "2017-07-01",
                                    "business_type": "Private Limited Company"
                                    }`}
                            </p>
                        </div>
                        <Button text='View API Docs' className=' text-white bg-blue-600 py-3 px-6' />
                    </div>
                    <div className='p-2'>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                            {features.map((feature, index) => (
                                <li key={index} className={`${cardDesign}`} >
                                    <h3>{feature.title}</h3>
                                    <p className=''>{feature.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ApiIntegrationComponent;
