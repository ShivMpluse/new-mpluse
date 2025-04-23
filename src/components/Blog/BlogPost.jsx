import React from "react";

const blogPosts = [
    {
        id: 1,
        title: "Why API-First Fintech Is the Future",
        date: "April 20, 2025",
        excerpt:
        "Explore how API-first design is transforming traditional banking into programmable infrastructure.",
        link: "/blogs/api-first-fintech",
    },
    {
        id: 2,
        title: "Understanding Virtual Accounts in India",
        date: "April 12, 2025",
        excerpt:
        "A deep dive into how virtual accounts streamline collections, improve reconciliation, and scale operations.",
        link: "/blogs/virtual-accounts",
    },
    {
        id: 3,
        title: "Top 5 Fintech Compliance Mistakes Startups Make",
        date: "March 30, 2025",
        excerpt:
        "Avoid these common pitfalls that can land your fintech in legal trouble or delay partnerships.",
        link: "/blogs/fintech-compliance-mistakes",
    },
];

function BlogPost() {
    return (
        <div className="max-w-6xl mx-auto p-6 mt-20">
        <h1 className="text-3xl font-bold text-center mb-10">Latest Insights</h1>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
            <li
                key={post.id}
                className="bg-white shadow-md p-6 rounded-lg  hover:shadow-xl transition"
            >
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-3">{post.date}</p>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <a
                href={post.link}
                className="text-blue-600 font-medium hover:underline"
                >
                Read more →
                </a>
            </li>
            ))}
        </ul>
        </div>
    );
}

export default BlogPost;
