import React, { useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaExclamationTriangle, FaArrowLeft, FaHome } from "react-icons/fa";
import gsap from "gsap";

const ErrorPage = () => {
    const navigate = useNavigate();
    const cardRef = useRef(null);
    const iconRef = useRef(null);
    const headingRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

        tl.fromTo(
        cardRef.current,
        { opacity: 0, y: 80, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1 }
        )
        .fromTo(
            iconRef.current,
            { rotate: -180, scale: 0, opacity: 0 },
            { rotate: 0, scale: 1, opacity: 1 },
            "-=0.6"
        )
        .fromTo(
            headingRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1 },
            "-=0.4"
        );
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-r from-blue-100 to-white">
            <div
                ref={cardRef}
                className="bg-white shadow-xl rounded-xl p-10 max-w-md w-full text-center"
            >
                <div
                ref={iconRef}
                className="text-yellow-500 mb-4"
                >
                <FaExclamationTriangle className="text-5xl mx-auto" />
                </div>
                <div ref={headingRef}>
                <h1 className="text-4xl font-bold text-gray-800 mb-2">404</h1>
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    Page Not Found
                </h2>
                <p className="text-gray-600 mb-6">
                    Sorry, the page you're looking for doesn't exist or has been moved.
                </p>
                </div>

                <div className="flex justify-center gap-4">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300 transition"
                >
                    <FaArrowLeft /> Back
                </button>

                <Link
                    to="/"
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
                >
                    <FaHome /> Home
                </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;
