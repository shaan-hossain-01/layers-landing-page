import Button from "@/app/components/Button";

export default function Hero() {
  return (
    <section>
      <div className="container py-24 mx-auto">
        <div className="flex items-center justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full font-semibold text-neutral-950 ">
            ✨ 7.5M round seed round raised
          </div>
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
          Impactful design, meaningful outcomes
        </h1>
        <p className="text-xl text-center text-white/50 mt-8 max-w-2xl mx-auto">
          We help you create products that not only look good but also deliver
          real value to your users. Our team of experts is dedicated to
          understanding your unique needs and crafting tailored solutions that
          drive results.
        </p>
        <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
          <input type="email" placeholder="Enter your email" className="bg-transparent px-4 flex-1"/>
          <Button
            type="submit"
            variant="primary"
            className="whitespace-nowrap"
            size="sm"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
}
