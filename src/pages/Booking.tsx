import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

type BookingForm = {
  name: string;
  phone: string;
  address: string;
};

export default function Booking() {
  const { serviceId } = useParams(); // get plumbing / electrician / cleaning

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingForm>();

  const onSubmit = (data: BookingForm) => {
    const bookingData = {
      service: serviceId,
      ...data,
    };

    console.log("Booking Submitted:", bookingData);
    alert("Booking successful!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg hover:shadow-2xl transition">
      <h1 className="text-2xl font-bold mb-4 capitalize">
        Book Service: {serviceId}
      </h1>
      <p className="text-gray-600 mb-6">
        Fill in your details to book this service.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            {...register("name", { required: "Name is required" })}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="Phone Number"
            {...register("phone", { required: "Phone is required" })}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <textarea
            placeholder="Address"
            {...register("address", { required: "Address is required" })}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
