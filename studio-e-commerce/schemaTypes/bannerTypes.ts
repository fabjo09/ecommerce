import { defineField, defineType } from 'sanity';

export const bannerType = defineType({
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Enables cropping and focal point selection
      },
      validation: (rule) => rule.required(), // Ensure an image is provided
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      validation: (rule) => rule.required().max(50), // Limit text length
    }),
    defineField({
      name: 'product',
      title: 'Product',
      type: 'reference', // Use a reference for product linking
      to: [{ type: 'product' }], // Reference to the post type
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required().max(200), // Limit to 200 characters
    }),
    defineField({
      name: 'smallText',
      title: 'Small Text',
      type: 'string',
      validation: (rule) => rule.max(50), // Optional with max limit
    }),
    defineField({
      name: 'midText',
      title: 'Mid Text',
      type: 'string',
      validation: (rule) => rule.max(100), // Optional with max limit
    }),
    defineField({
      name: 'largeText1',
      title: 'Large Text 1',
      type: 'string',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'largeText2',
      title: 'Large Text 2',
      type: 'string',
      validation: (rule) => rule.max(100), // Optional
    }),
    defineField({
        name: 'discount',
        title: 'Discount',
        type: 'string',
        validation: (rule) =>
          rule
            .required()
            .regex(/^\d+%$/, {
              name: 'percentage',
              message: 'Discount must be a valid percentage (e.g., "20%").',
            }),
      }),      
    defineField({
      name: 'saleTime',
      title: 'Sale Time',
      type: 'string',
    }),
  ],
});
