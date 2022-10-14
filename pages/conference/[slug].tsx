import React from "react"
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import { Conference } from "../../models/content-types"
import { contentTypes } from "../../models/project"
import KontentService from "../../services/KontentService"
import { RichTextElement } from "@kontent-ai/react-components"
import Layout from "../../components/Layout"

interface IConferenceData {
    conference: Conference,
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
    const confs: Conference[] = []
	
    for (let i=0; i<locales.length; i++){
        const data = await KontentService.Instance().deliveryClient
            .items<Conference>()
            .type(contentTypes.conference.codename)
            .languageParameter(locales[i])
            .elementsParameter([contentTypes.conference.elements.url_slug.codename])
            .toPromise()

        data.data.items.forEach(i => {
            if (!confs.find(c => c.system.id === i.system.id && c.system.language === i.system.language))
                confs.push(i)
        })
    }

    console.log(confs)

	return {
		paths: confs.map(conf => ({
			params: {
				slug: conf.elements.url_slug.value,
			},
            locale: conf.system.language
		})),
        fallback: false,
	}
}

export const getStaticProps: GetStaticProps<IConferenceData> = async ({ params, preview, locale }) => {
	const slug = params.slug.toString()

	const data = await KontentService.Instance(preview).deliveryClient
        .items<Conference>()
		.type(contentTypes.conference.codename)
		.equalsFilter(`elements.${contentTypes.conference.elements.url_slug.codename}`, slug)
        .languageParameter(locale)
		.limitParameter(1)
		.toPromise()

	return {
		props: {
            conference: data.data.items[0]
		},
	}
}

const ConfPage: React.FC<IConferenceData> = (data) => {
    const conference = data.conference as Conference

    return (
    <Layout>
        <div className="relative h-96">
            <img
                src={conference.elements.venue_photo.value[0].url}
                className="w-full h-full object-cover"
                alt={conference.elements.name.value} />
        </div>

        <div className="max-w-4xl mx-auto bg-white py-12 px-12 lg:px-24 -mt-32 relative z-10">
            <h2 className="mt-4 uppercase tracking-widest text-xs text-gray-600">{conference.elements.address.value}</h2>
            <h1 className="font-display text-2xl md:text-3xl text-gray-900 mt-4">{conference.elements.name.value}</h1>

            <div className="prose prose-sm sm:prose lg:prose-lg mt-6">
                <RichTextElement richTextElement={conference.elements.description} />
            </div>  
        </div>
    </Layout>
)}

export default ConfPage
