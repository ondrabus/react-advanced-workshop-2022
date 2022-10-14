import { ComponentConference } from "../models/content-types/_component__conference";
import Image from "next/image"
import Link from "next/link";
import { RichTextElement } from "@kontent-ai/react-components";
import { getUrlByContentType } from "../utils/urlUtils";
import { contentTypes, contentTypeSnippets } from "../models/project";

const ConferenceComponent: React.FC<ComponentConference> = (data) => {
    const conference = data.elements.conference.linkedItems[0]

    return (conference && <div className="grid grid-cols-1 md:grid-cols-2">

    <div className="bg-white p-12 md:p-24 flex justify-end items-center">
        <Link href={getUrlByContentType(contentTypes.conference.codename, conference.elements.url_slug.value)}>
            <a>
                <img
                    src={conference.elements.venue_photo.value[0].url}
                    alt=""
                    className="w-full max-w-md" />
            </a>
        </Link>
    </div>

    <div className={(data.elements.position.value[0].codename === 'image_right__text_on_left' ? 'md:order-first ' : '') + "bg-gray-100 p-12 md:p-24 flex justify-start items-center"}>
      <div className="max-w-md">
        <div className="w-24 h-2 bg-yellow-800 mb-4"></div>
        <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6">{conference.elements.name.value}</h2>
        <RichTextElement richTextElement={conference.elements.description} />
        <p className="font-light text-gray-600 text-sm md:text-base mb-6 leading-relaxed">

        </p>
        <Link href={getUrlByContentType(contentTypes.conference.codename, conference.elements.url_slug.value)}>
            <a className="inline-block border-2 border-yellow-800 font-light text-yellow-800 text-sm uppercase tracking-widest py-3 px-8 hover:bg-yellow-800 hover:text-white">Read more</a>
        </Link>
      </div>
    </div>

  </div>)
}
export default ConferenceComponent