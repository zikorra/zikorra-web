import { Mail, Phone } from "lucide-react";
import WaitlistForm from "./WaitlistForm";

export default function CtaSection() {
  return (
    <section className="bg-[#eef2fb] px-6 py-20">
      <div className="mx-auto max-w-5xl rounded-3xl border border-blue-100 bg-[#eef2fb] px-6 py-16 text-center sm:px-12">
        <h2 className="text-3xl font-bold tracking-tight text-[#0b1220] sm:text-4xl">
          Be among the first to use Zikorra.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-gray-500">
          Join the waitlist for launch updates, early access, and
          availability in your city.
        </p>

        <WaitlistForm className="mt-8" />

        <div className="mt-16 flex flex-col items-center justify-end gap-8 border-t border-blue-100 pt-8 sm:flex-row sm:gap-16">
          <div className="flex items-center gap-3 text-left">
            <Phone className="h-4 w-4 text-brand" aria-hidden />
            <div>
              <p className="text-sm font-semibold text-[#0b1220]">
                Contact us
              </p>
              <p className="text-sm text-gray-500">+234 237 3829</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-left">
            <Mail className="h-4 w-4 text-brand" aria-hidden />
            <div>
              <p className="text-sm font-semibold text-[#0b1220]">
                Send an email
              </p>
              <p className="text-sm text-gray-500">zikorra@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
