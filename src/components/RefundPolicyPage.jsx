import refundPolicy from './data/refundPolicy.json';

function RefundPolicyPage() {
    return (
        <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Refund Policy</h1>
        {refundPolicy.map(section => (
            <div key={section.id} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            <p className="text-gray-700">{section.content}</p>
            </div>
        ))}
        </div>
    );
}

export default RefundPolicyPage;
