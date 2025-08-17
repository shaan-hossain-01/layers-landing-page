import Image from "next/image";
import logoImage from "@/app/assets/images/logo.svg";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  return (
    <section className="py-4">
      <div className="container">
        <div className="grid grid-cols-2 border rounded-full border-white/15 p-2 px-4 items-center justify-center ">
          <div>
            <Image src={logoImage} alt="Logo" className="h-9 w-auto" />
          </div>
          <div className="flex justify-end items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="cursor-pointer md:hidden"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <button className="border border-white  rounded-full h-12 px-6 font-medium">Log In</button>
            <button className="border border-white  rounded-full h-12 px-6 font-medium">Sign Up</button>
          </div>
        </div>
      </div>
    </section>
  );
}
