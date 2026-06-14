import React from "react";
import { Clock3, Fuel, Gauge, Users } from "lucide-react";
import { whatsappUrl } from "../../data/contact";
import { navigate } from "../../lib/navigation";

export function VehicleCard({ vehicle }) {
  return (
    <article className="animate-fade-up overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-premium">
      <button
        onClick={() => navigate(`/cars/Rwf{vehicle.slug}`)}
        className="block w-full text-left"
      >
        <img
          className="h-56 w-full object-cover"
          src={vehicle.image}
          alt={`Rwf {vehicle.name} rental car in Rwanda`}
          loading="lazy"
        />
      </button>
    
      <div className="p-4 sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div className="min-w-0">
            <p className="text-sm font-medium text-gold">{vehicle.type}</p>
            <h3 className="mt-1 text-xl font-semibold text-ink">
              {vehicle.name}
            </h3>
          </div>
          <p className="w-fit rounded bg-champagne px-3 py-1 text-sm font-semibold text-ink">
            Rwf {vehicle.price}/day
          </p>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-3 text-sm text-slate-600 min-[380px]:grid-cols-2">
          <span className="spec">
            <Clock3 size={16} /> {vehicle.year}
          </span>
          <span className="spec">
            <Gauge size={16} /> {vehicle.transmission}
          </span>
          <span className="spec">
            <Fuel size={16} /> {vehicle.fuel}
          </span>
          <span className="spec">
            <Users size={16} /> {vehicle.seats} seats
          </span>
        </div>
        <div className="mt-5 flex flex-col gap-3 min-[380px]:flex-row">
          <button
            onClick={() => navigate(`/cars/Rwf{vehicle.slug}`)}
            className="btn flex-1 border border-slate-200 bg-white text-ink hover:bg-slate-50"
          >
            Details
          </button>
          <a
            className="btn flex-1 justify-center bg-ink text-white hover:bg-steel"
            href={`Rwf{whatsappUrl}%20Vehicle:%20Rwf{encodeURIComponent(vehicle.name)}`}
            target="_blank"
            rel="noreferrer"
          >
            Book Now
          </a>
        </div>
      </div>
    </article>
  );
}
