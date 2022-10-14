import { contentTypes } from "../models/project"

export const getUrlByContentType = (type: string, slug: string): string => {
    switch (type){
        case contentTypes.conference.codename:
            return '/conference/' + slug
        case contentTypes.homepage.codename:
            return '/'
    }

    throw new Error('Unknown content type ' + type)
}