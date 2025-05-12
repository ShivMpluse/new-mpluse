import { FaMoneyCheckAlt, FaShieldVirus, FaHandshake, FaMapMarkerAlt } from "react-icons/fa";

const industries = [
  {
    icon: <FaMoneyCheckAlt className="text-blue-600" />,
    title: "Fintech Startups",
    desc: "Accelerate customer onboarding and KYC processes with automated document verification.",
  },
  {
    icon: <FaShieldVirus className="text-green-600" />,
    title: "Insurance Companies",
    desc: "Streamline claims processing and policy issuance with automated document verification.",
  },
  {
    icon: <FaHandshake className="text-purple-600" />,
    title: "Lending Apps",
    desc: "Reduce fraud and improve approval rates with accurate document verification.",
  },
  {
    icon: <FaMapMarkerAlt className="text-yellow-600" />,
    title: "Gig Platforms",
    desc: "Quickly verify worker identities and credentials to enable faster onboarding.",
  },
];

export default function Industry() {
  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-bold mb-10">Industries Benefiting</h2>
      <ul className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto px-4">
        {industries.map((item, i) => (
          <li key={i} className="flex gap-4 items-start p-6 bg-white shadow rounded-xl shadow-ms hover:shadow-lg duration-300 animation">
            <div className="text-3xl bg-opacity-10 p-3 rounded-full">{item.icon}</div>
            <div className="text-left">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
