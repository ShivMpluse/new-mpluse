import React from "react";
import { FaIdCard } from "react-icons/fa"; // You can change icon if you prefer others

export default function Verification() {
    return (
        <div class="bg-blue-50">
            <section className="max-w-[1200px] mx-auto py-16 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        What is OCR Verification?
                    </h2>
                    <p className="text-gray-600 text-lg mb-8 max-w-[700px] mx-auto">
                        <strong>Mpluse OCR Verification</strong> reads text from identity documents and
                        automatically extracts key details such as <strong>Name</strong>, <strong>Date of Birth</strong>,
                        and <strong>ID Numbers</strong>. This secure system reduces manual errors and
                        accelerates <strong>KYC verification</strong> for a seamless onboarding experience.
                    </p>
                    <div className="flex justify-center">
                        <div className="bg-white shadow-lg rounded-full p-6">
                            <FaIdCard className="text-blue-600 text-5xl" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
