import Button from "@/app/components/Button";
import Pointer from "@/app/components/Pointer";
import designExample1Image from "@/app/assets/images/design-example-1.png";
import designExample2Image from "@/app/assets/images/design-example-2.png";
import Image from "next/image";

export default function Hero() {
  return (
    <section className=" py-24 overflow-x-clip">
      <div className="container relative mx-auto">
        <div className="absolute top-16 -left-52 hidden lg:block">
          <Image
            src={designExample1Image}
            alt="Design Example 1"
            className=""
          />
        </div>
        <div className="absolute -right-86 -top-16 hidden lg:block">
          <Image
            src={designExample2Image}
            alt="Design Example 2"
            className=""
          />
        </div>
        <div className="absolute left-38 top-105 hidden lg:block">
          <Pointer name={"Andrea"} />
        </div>
        <div className="absolute right-60 -top-4 hidden lg:block">
          <Pointer name={"Bryan"} color={"red"} />
        </div>
        <div className="flex items-center justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full font-semibold text-neutral-950 ">
            ✨ 7.5M round seed round raised
          </div>
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
          Impactful design,
          <br /> created effortlessly
        </h1>
        <p className="text-xl text-center text-white/50 mt-8 max-w-2xl mx-auto px-4">
          We help you create products that not only look good but also deliver
          real value to your users. Our team of experts is dedicated to
          understanding your unique needs and crafting tailored solutions that
          drive results.
        </p>
        <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent px-4 flex-1"
          />
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
