// import { style } from 'framer-motion/client';
import techData from './CompanyInfo/techData.js';
import styled from 'styled-components';

function TechnologyInfo() {
    return (
        <Section className=" px-4 max-w-[1200px] mx-auto mt-18 py-10 mb-10">
        <ul>
            {techData.map((item) => (
                <li key={item.id} className=" flex flex-col justify-center items-start p-4 mb-4 bg-gray-50 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                    {Array.isArray(item.content) ? (
                        <ul className="list-disc list-inside space-y-1">
                        {item.content.map((point, index) => (
                            <li key={index} className="text-gray-700">{point}</li>
                        ))}
                        </ul>
                    ) : (
                        <p className="text-gray-700">{item.content}</p>
                    )}
                </li>
            ))}
        </ul>
            
        </Section>
    );
}

export default TechnologyInfo;

const Section = styled.div `
    background-color: #eaf0f9d6;
    /* height: 100vh; */
`