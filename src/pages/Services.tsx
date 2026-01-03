import { Link } from "react-router-dom";

const services = [
  {
    id: "plumbing",
    name: "Plumbing",
    description: "Leak fixing, pipe installation, bathroom fittings",
  },
  {
    id: "electrician",
    name: "Electrician",
    description: "Wiring, switch repair, appliance installation",
  },
  {
    id: "cleaning",
    name: "Home Cleaning",
    description: "Full home, kitchen, bathroom deep cleaning",
  },
];

export default function Services() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="border rounded-lg p-4 shadow-sm  hover:shadow-2xl transition"
          >
            <h2 className="text-lg font-semibold">{service.name}</h2>
            <p className="text-sm text-gray-600 mt-2">
              {service.description}
            </p>

            <Link
              to={`/booking/${service.id}`}
              className="inline-block mt-4 text-blue-600 font-medium"
            >
              Book Now →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
