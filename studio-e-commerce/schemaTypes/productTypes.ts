import {defineField, defineType} from 'sanity'

export const productTypes = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'array',
      of : [{ type : 'image'}],
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'name',
            maxLength: 90,
        },
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'price',
        title: 'Price',
        type: 'number',
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'details',
        title: 'Details',
        type: 'string',
        validation: (rule) => rule.required(),
    }),
    // defineField({
    //   name: 'publishedAt',
    //   type: 'datetime',
    //   initialValue: () => new Date().toISOString(),
    //   validation: (rule) => rule.required(),
    // }),
  ],
})