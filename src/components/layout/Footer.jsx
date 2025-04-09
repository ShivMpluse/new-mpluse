import data from '../../footer data/FooterData.js'

const Footer = () => {
    return (
        <section className='w-full z-50 border bg-black text-white'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 p-8">
                {data.map((section) => (
                    <div key={section.id} className=' p-2 flex flex-col justify-center '>
                        {section.image && (
                            <div className="img mb-2 flex flex-col justify-center items-center">
                                <img src={section.image} alt={section.name} className='h-10 w-33 object-contain' />
                                <p className="text-sm mt-2">{section.description}</p>
                            </div>
                        )}
                        {section.title && (
                            <>
                                <h3 className="font-bold text-lg mb-2">{section.title}</h3>
                                <ul className="space-y-1">
                                    {section.features?.map((item, idx) => (
                                        <li key={idx} className="hover:text-gray-400 text-white cursor-pointer">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Footer;
