import npci from '../../../assets/image/npci.png';
import pci from '../../../assets/image/compliance.png';
import dpdp from '../../../assets/image/pci-dss.png';

const certificates = [
  {
    img: npci,
    title: "NPCI Certified",
  },
  {
    img: pci,
    title: "PCI DSS Compliant",
  },
  {
    img: dpdp,
    title: "DPDP Act Compliant",
  },
];

export default function CertifiedAndSecure() {
    return (
        <section className="bg-gradient-to-br from-[#f4f7fa] to-[#edf2f7] py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-[#0d1b3e]">Certified and Secure</h2>
            <ul className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {certificates.map((cert, i) => (
                    <li key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl duration-300 animation">
                        <img src={cert.img} alt={cert.title} className="mx-auto h-16 mb-4" />
                        <h3 className="font-semibold text-[#0d1b3e]">{cert.title}</h3>
                    </li>
                ))}
            </ul>
        </section>
    );
}
