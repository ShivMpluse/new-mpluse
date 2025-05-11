import api from '../../../assets/image/api-integration.png'
import Button from '../../UI/Button';

export default function ApiIntegration() {
  return (
    <div className="bg-white">
      <section className="max-w-[1200px] mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Easy API Integration</h2>
            <p className="text-gray-600 mb-6">
              Developer-friendly REST APIs with quick start docs & sandbox support.
            </p>

            {/* Code Box */}
            <pre className="bg-gray-100 p-4 rounded text-sm mb-6 overflow-auto">
              <code>
{`fetch('https://api.mpluse.com/v1/upi/generate-qr', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    amount: 1000,
    reference: 'INV-001',
    description: 'Payment for Order #123'
  })
})`}
              </code>
            </pre>

            <Button text="Explore API Docs" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded" />
          </div>

          {/* Image */}
          <img
            src={api}
            alt="API integration illustration with code"
            className="w-full h-auto max-w-sm mx-auto"
          />
        </div>
      </section>
    </div>
  );
}
