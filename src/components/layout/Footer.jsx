import data from '../../footer data/FooterData.js'

const Footer = () => {
    return (
        <section className='w-full z-50  bg-black text-white'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 p-8 max-w-[1400px] mx-auto">
                {data.map((section) => (
                    <div key={section.id} className=' p-2 flex flex-col  '>
                        {section.image && (
                            <div className="img mb-2 flex flex-col justify-center items-center">
                                <img src={section.image} alt={section.name} className='h-10 w-33 object-contain' />
                                <p className="text-justify capitalize text-xs mt-2 text-blue-100">{section.description}</p>
                            </div>
                        )}
                        {section.title && (
                            <>
                                <h3 className="font-bold text-lg mb-2 px-4">{section.title}</h3>
                                <ul className="space-y-1">
                                    {section.features?.map((item, idx) => (
                                        <li key={idx} className="hover:text-gray-400 text-gray-100 cursor-pointer px-4 mx-auto">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                ))}
            </div>
            <div className="flex py-10 justify-center text-gray-400"> © Mpluse is Proudly Owned by &nbsp;<span className='text-[#ff0202b0]'> &nbsp; Mpluse Fintech Private Limited </span></div>
        </section>
    )
}

export default Footer;
