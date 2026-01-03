import { Link } from "react-router-dom";

const highlights = [
  { title: "Trusted Professionals", description: "Verified experts for every service" },
  { title: "Easy Booking", description: "Book services in just a few clicks" },
  { title: "24/7 Support", description: "We are here to assist you anytime" },
];

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      {/* Hero Section */}
      <div className="text-center bg-blue-50 p-10 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">
          Welcome to Home Services Booking
        </h1>
        <p className="text-gray-700 mb-6">
          Book trusted professionals at your doorstep in just a few clicks.
        </p>
        <Link
          to="/services"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Explore Services
        </Link>
      </div>

      {/* Highlights Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 ">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="border p-6 rounded-lg shadow hover:shadow-2xl transition "
          >
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
