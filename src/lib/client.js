import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'sqg9kh17',
    dataset: 'production',
    useCdn: true,
    token: process.env.SANITY_PUBLIC_TOKEN

})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);