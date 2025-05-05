import bank_api from '/image/bank-api.png'

const What_Is_Banking_Service = ({ mainbg }) => {

    const description = "Mpluse BaaS helps businesses embed financial services using plug-and-play APIs. Launch UPI, accounts, cards, and compliance flows without building backend banking infra."

    return (
        <div className={`${mainbg} bg-[#c4dff8]`}>
            <section className='max-w-[1200px] mx-auto py-12 grid grid-rows-3 gap-4 justify-center items-center px-4'>
                <h1 class="text-xl md:text-4xl capitalize font-bold text-center">what is banking as a service</h1>
                <div class="flex justify-center items-center">
                    <img src={bank_api} alt="Bank API" className='h-20 w-24' />
                </div>
                <p class=" text-center max-w-[600px]">{description}</p>
            </section>
        </div>
    )
}

export default What_Is_Banking_Service