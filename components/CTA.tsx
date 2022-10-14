import Link from "next/link";
import { ComponentCTA } from "../models/content-types/_component__cta";
import Image from "next/image";

const CTA: React.FC<ComponentCTA> = (data) => {
    return (
        <div className="relative w-full py-12 px-12">
          <div className="relative z-10 text-center py-12 md:py-24">
            <h1 className="text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6">{data.elements.headline.value}</h1>
            <p className="text-white mb-10 text-base md:text-lg font-bold">{data.elements.description.value}</p>
            <Link href={data.elements.link.value}>
                <a className="inline-block bg-yellow-800 text-white uppercase text-sm tracking-widest font-heading px-8 py-4">{data.elements.link_text.value}</a>
            </Link>
          </div>
  
          <img
            src={data.elements.image.value[0].url}
            alt=""
            className="w-full h-full absolute inset-0 object-cover"
            />
        </div>)
}
export default CTA