import styled from 'styled-components'
import Button from './Button'

const images = [
    {
        id: "1",
        image: "/image/hdfc.png"
    },
    {
        id: "2",
        image: "/image/icici.png"
    },
    {
        id: "3",
        image: "/image/axis.png"
    },
    {
        id: "4",
        image: "/image/union.png"
    },
    {
        id: "5",
        image: "/image/kotak.png"
    },
    {
        id: "6",
        image: "/image/panjab.png"
    }
]

const HeroSection = ({ 
        heading, 
        description, 
        buttonText, 
        button_Text, 
        imageSrc, 
        imageAlt, 
        onButtonClick,
        sectionBackGroundColor,
        btnbg,
        imgStyle,
        companyLogo
    }) => {
    return (
        <div className={`w-full ${sectionBackGroundColor}`}>
            <Section className={`px-4 max-w-[1200px] mx-auto mt-18 flex flex-col items-center ${sectionBackGroundColor}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-4 items-center mt-16">
                    <div className="text-center gap-6 md:text-left flex flex-col items-center md:items-start px-4 md:px-10 py-4">
                        <h2 className={` text-2xl md:text-5xl mt-6 leading-tight capitalize `}>
                            {heading}
                        </h2>
                        <p className={`text-lg mt-4 max-w-md font-sans font-[400] text-justify `}>
                            {description}
                        </p>
                        <div class="flex flex-wrap gap-5 md:gap-10">
                            <Button 
                                text={buttonText} 
                                className='px-4 py-2 bg-[#b5001e] text-white font-semibold'
                                onClick={onButtonClick}
                            />
                            <Button 
                                text={button_Text} 
                                className={`px-4 py-2 bg-transparent border font-semibold ${btnbg}`}
                                onClick={onButtonClick}
                            />
                        </div>
                        
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <img 
                            src={imageSrc} 
                            alt={imageAlt} 
                            className={`bottom-[-10px] right-8 md:right-16 scale-75 md:scale-90 z-20 ${imgStyle}`}
                        />
                    </div>
                </div>
                <div className={`my-10 p-4 max-w-[1200px] w-full text-4xl text-gray-400 flex justify-center items-center gap-10 font-black  mt-10 mx-auto overflow-hidden ${companyLogo}`}>
                        <marquee behavior="alterant" direction="left" className="flex gap-10">
                            <ul className='flex gap-10'>
                                {
                                    images.map((elem) => (
                                        <li key={elem.id} className='shadow-md  h-16 w-74 bg-white'>
                                            <img src={elem.image} alt="company" className={`h-full w-full `}/>
                                        </li>
                                    ))
                                }
                            </ul>
                        </marquee>
                    </div>
            </Section>
        </div>
            
    )
}

export default HeroSection

const Section = styled.section`
    background-color: #eaf0f9d6;
`
