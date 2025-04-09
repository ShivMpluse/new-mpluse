import card  from '../../../public/image/Frame.png'

const Solution = () => {
    return (
        <section className='max-w-[1400px] mx-auto py-10'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <div className="flex flex-col gap-4 justify-center items-center  py-6">
                    <h1 className="text-4xl capitalize font-semibold">solution for every Business</h1>
                    <ul className="flex gap-4 justify-center text-2xl text-gray-400">
                        <li>e-commerce</li>
                        <li>Ed-tech</li>
                        <li>Saas</li>
                        <li>Hyetal</li>
                    </ul>
                </div>
                
                <div className="flex ">
                    <img src={card} alt="card" className='max-h-[350px] md:max-h-[500px] mx-auto' />
                </div>
            </div>
        </section>
    )
}

export default Solution
