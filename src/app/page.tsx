import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "instant delivery",
    icon: ArrowDownToLine,
    description:
      "Welcome to DigitalHippo, where convenience meets efficiency! Experience the epitome of instant delivery with our cutting-edge services. Whether it's a last-minute gift, urgent documents, or everyday essentials, we've got you covered. Say goodbye to waiting and hello to instant gratification as we prioritize speed without compromising on quality. With [Your Company Name], promptness isn't just a promise; it's our commitment to your satisfaction. Trust us to deliver your needs swiftly and seamlessly, making life's errands a breeze.",
  },
  {
    name: "Guarranted quality",
    icon: CheckCircle,
    description: "Welcome to DigitalHippo, where excellence is not just a goal, but a guarantee! We take pride in offering unparalleled quality in every aspect of our service. From sourcing the finest materials to employing skilled professionals, we ensure that every product and service bearing our name meets the highest standards. Our commitment to quality is unwavering, backed by rigorous quality control measures at every stage of the process. With [Your Company Name], you can rest assured that you're receiving nothing short of the best. Trust us to deliver excellence consistently, because when it comes to quality, we never compromise.",
  },
  {
    name: "For the planet ",
    icon: Leaf,
    description: 
    "Welcome to DigitalHippo, where sustainability is not just a choice, but a way of life. As stewards of the planet, we are dedicated to minimizing our environmental footprint and promoting a healthier, greener future for generations to come. From eco-friendly packaging materials to carbon-neutral delivery options, we prioritize sustainability in every aspect of our operations. With [Your Company Name], you can feel confident knowing that your choices are making a positive impact on the planet. Join us in our mission to protect and preserve the Earth, because together, we can create a brighter tomorrow.",
  },
];
export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-light text-gray-900 sm:text-6xl">
            Your marketplace of high quality{" "}
            <span className="text-blue-600">digital assets</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to DigitalHippo. Every asset on our platform is varified by
            our team to ensure our high quality standards
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant="ghost">Our quality promise &rarr;</Button>
          </div>
        </div>
        <ProductReel query={{sort:"desc",limit:4}} href="/products" title="Brand new"/>
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => {
              return (
                <div
                  key={perk.name}
                  className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                >
                  <div className="md:flex-shrink-0 flex justify-center">
                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                      {<perk.icon className="w-1/3 h-1/3" />}
                    </div>
                  </div>
                  <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                    <h3 className="text-base font-medium text-gray-900">
                      {perk.name}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {perk.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
