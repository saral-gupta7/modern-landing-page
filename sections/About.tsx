import Image from "next/image";
import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
// import { imageContent } from "@/constants/constants";
import landscape from "@/public/images/showcase.jpg";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  return (
    <section
      className="relative mt-5 min-h-[calc(100vh-80px)] px-6 py-12"
      id="about"
    >
      <div className="font-poppins relative grid h-full w-full grid-cols-2 gap-40">
        <div className="flex h-full w-full items-center justify-end">
          <Image src={landscape} alt="photo" className="w-2/3 rounded-xl" />
        </div>
        <div className="mx-auto max-w-3xl px-6 py-12 font-sans text-gray-800">
          <h1 className="text-2xl font-bold text-black">
            The wildlife and human&apos;s
            <br />
            <span className="text-4xl font-medium text-gray-200">
              The wildlife and human&apos;s harmonious co-existence
            </span>
          </h1>

          <p className="text mt-4 font-semibold text-gray-400">
            The series uses a single self portrait for all the concepts to bring
            out a sense of uniformity and consistency in design and intend on
            proving how a single image can be used to create several concepts.
          </p>

          <p className="mt-4 text-gray-500">
            The core intent of this series was to bring out the harmony in the
            co-existence of wildlife and humans and extract the association by
            building on their traits, further glorifying the relatable values
            they hold as a lesson for the humans to connect with.
          </p>

          <p className="mt-4 text-gray-500">
            People are often seen to associate themselves with nature and draw
            in their life lessons from traits being witnessed in wildlife. This
            led me to make a series that identifies the relation, making the
            viewers feel it through the commonalities between species.
          </p>

          {/* <Image
            src={landscape}
            // width={700}
            // height={500}
            alt="photo"
            className="rounded-lg object-cover"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default About;
