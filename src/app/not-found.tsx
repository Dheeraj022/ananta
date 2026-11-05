import React from "react";
import Link from "next/link";
import { Compass, Home, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-sand-light/50 px-4 py-16">
      <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-xl border border-sand shadow-lg text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-full bg-forest-surface text-forest flex items-center justify-center border border-forest/20">
          <Compass className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-forest font-semibold">
            404 — Page Not Found
          </span>
          <h1 className="text-3xl font-serif text-charcoal font-medium mt-2">
            Retreat Path Not Found
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
            The destination or room page you are looking for has been relocated or is no longer
            available.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-5 py-2.5 bg-forest hover:bg-forest-hover text-white text-xs font-medium uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>

          <Link
            href="/contact"
            className="px-5 py-2.5 border border-stone-300 hover:border-forest text-stone-700 hover:text-forest text-xs font-medium uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Contact Desk</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

