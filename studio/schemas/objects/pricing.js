export default {
  type: 'object',
  name: 'pricing',
  title: 'Pricing',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subheading',
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Pricing',
      };
    },
  },
};
