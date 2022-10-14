import { ComponentThreeConferences } from "../models/content-types/_component__three_conferences";
import Image from "next/image"
import Link from "next/link";
import { contentTypes } from "../models/project";
import { getUrlByContentType } from "../utils/urlUtils";

const ThreeConferences: React.FC<ComponentThreeConferences> = (data) => {
    
    return (data.elements.conferences.linkedItems.length > 0 && <>
        <div className="max-w-xl mx-auto text-center py-24 md:py-32">
          <div className="w-24 h-2 bg-yellow-800 mb-4 mx-auto"></div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">{data.elements.headline.value}</h2>
          <p className="font-light text-gray-600 mb-6 leading-relaxed">{data.elements.description.value}</p>
        </div>
  
        <div className="flex flex-wrap bg-black">
            {data.elements.conferences.linkedItems.map(conf =>
                <Link href={getUrlByContentType(contentTypes.conference.codename, conf.elements.url_slug.value)} key={conf.system.id}>
                    <a className="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75">
                        <div className="relative z-10">{conf.elements.name.value}</div>
                        <img
                            className="absolute inset-0 w-full h-full object-cover opacity-50"
                            src={conf.elements.venue_photo.value[0].url}
                            alt={conf.elements.name.value}
                            />
                    </a>
                </Link>
            )}
        </div>
    </>)
}
export default ThreeConferences