const sampleData = {
  total: 20,
  pageSize: 10,
  currentPage: 1,
  filters: [
    {
      title: 'Audiences',
      key: 'audience',
      facets: [
        {
          title: 'Employer',
          value: 'employer',
        },
        {
          title: 'Individual & Family',
          value: 'indfam',
        },
        {
          title: 'Medicare',
          value: 'medicare',
        },
        {
          title: 'Producer',
          value: 'producer',
        },
        {
          title: 'Provider',
          value: 'provider',
        },
      ],
    },
    {
      title: 'Topics',
      key: 'topics',
      facets: [
        {
          title: 'Topic 1',
          value: 'topic_1',
        },
        {
          title: 'Topic 2',
          value: 'topic_2',
        },
        {
          title: 'Topic 3',
          value: 'topic_3',
        },
        {
          title: 'Topic 4',
          value: 'topic_4',
        },
      ],
    },
    {
      title: 'Media',
      key: 'media',
      facets: [
        {
          title: 'Articles',
          value: 'articles',
        },
        {
          title: 'Documents',
          value: 'documents',
        },
        {
          title: 'Podcasts',
          value: 'podcasts',
        },
        {
          title: 'Video',
          value: 'video',
        },
      ],
    },
  ],
  data: [
    {
      title: 'Regular Dental Care and Your Overall Health | Wellmark Blue',
      link: '#',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac ullamcorper diam. Ut tristique suscipit faucibus. Phasellus nec faucibus sem. Curabitur vulputate tellus at metus rutrum, non scelerisque lectus ultricies.',
      url: 'https://www.wellmark.com/blue/healthy-living/on-the-front-lines-of-dental-care',
      isPDF: false,
    },
    {
      title: 'Choosing a dental plan for your business | Blue at Work',
      link: '#',
      description:
        'Nulla ultricies purus vitae sagittis placerat. Mauris sit amet nisl ut felis tempor facilisis. Nullam laoreet libero fermentum turpis tincidunt, ac malesuada dolor dapibus. Maecenas sit amet rutrum elit. Phasellus est libero, rutrum eget dui quis, vestibulum consequat lorem.',
      url: 'https://www.wellmark.com/blue/healthy-living/on-the-front-lines-of-dental-care',
      isPDF: false,
    },
    {
      title: 'Dental programs and resources | Wellmark',
      link: '#',
      description:
        'Morbi faucibus rhoncus ligula, ultrices efficitur nibh viverra sit amet. Pellentesque bibendum urna vel orci egestas auctor. Nullam iaculis quam et pulvinar ultricies. Phasellus viverra consectetur est nec pellentesque. Aenean sollicitudin nibh in erat laoreet, sit amet pharetra lorem finibus. Quisque dolor purus, tempor sed sem non, porttitor viverra leo.',
      url: 'https://www.wellmark.com/blue/healthy-living/on-the-front-lines-of-dental-care',
      isPDF: false,
    },
    {
      title: 'Additional benefits: dental, vision and hearing | Wellmark',
      link: '#',
      description:
        'Nunc pretium justo vitae massa vulputate, non ullamcorper odio posuere. Sed sodales nisi tellus, vel porta sapien porta ac. In consequat lacus id neque porttitor venenatis vel ut nibh.',
      url: 'https://www.wellmark.com/blue-at-work/resources/what-to-consider-in-a-dental-plan',
      isPDF: false,
    },
    {
      title: 'Find a doctor, dentist, pharmacy or facility | Wellmark',
      link: '#',
      description:
        'Nam dapibus iaculis velit in eleifend. Vivamus sit amet dapibus augue. Fusce euismod suscipit nibh tincidunt cursus. Nulla molestie sollicitudin sem. Etiam ac quam id dolor placerat ultrices nec quis neque. Nulla convallis placerat ultricies. Phasellus ut erat vel nisi pretium porta. Etiam urna diam, maximus ac convallis quis, mattis ut neque. Donec interdum, diam ac placerat egestas, dui velit condimentum ligula, vel accumsan est sapien vel enim. Integer nisi diam, fringilla eu tempor nec, fringilla eu justo.',
      url: 'https://www.wellmark.com/finder',
      isPDF: false,
    },
    {
      title: 'Dental Reimbursement Form - Wellmark',
      link: '#',
      description:
        'Duis pellentesque erat non sem faucibus, vel efficitur nunc eleifend. Curabitur mi nisi, sodales vel tristique faucibus, dignissim ut tortor.',
      url: 'https://www.wellmark.com/medicare/fulldocumentname_restofURL_documentname.pdf',
      isPDF: true,
    },
    {
      title: 'Shop all Wellmark health insurance plans | Wellmark',
      link: '#',
      description:
        'Sed laoreet condimentum nisl vel lobortis. Sed congue augue et lorem euismod, sed fringilla velit mattis. Aenean feugiat tortor et lorem sollicitudin eleifend. Proin pulvinar ligula eu enim ornare molestie.',
      url: 'https://www.wellmark.com/shop-health-insurance-plans',
      isPDF: false,
    },
    {
      title:
        'Dental & Vision Insurance for Iowa and South Dakota Mid-Size Groups ',
      link: '#',
      description:
        'Ut sodales, mi in convallis blandit, nisl augue accumsan nulla, et hendrerit nulla erat id sapien. Cras pulvinar mollis cursus.',
      url: 'https://www.wellmark.com/employer/small-group/dental-and-vision-plans',
      isPDF: false,
    },
    {
      title:
        'Dental & Vision Insurance for Iowa and South Dakota Mid-Size Groups ',
      link: '#',
      description:
        'Fusce fermentum tellus dolor, sit amet auctor lectus malesuada ut. Proin non cursus nisl. Sed quis arcu lobortis, pellentesque orci et, eleifend sem. Nunc interdum tortor risus, at aliquet orci fringilla ut. Nulla eu bibendum odio. In in accumsan nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      url: 'https://www.wellmark.com/employer/small-group/dental-and-vision-plans',
      isPDF: false,
    },
    {
      title:
        'Dental & Vision Insurance for Iowa and South Dakota Mid-Size Groups ',
      link: '#',
      description:
        'Maecenas commodo ligula in arcu laoreet, nec vulputate velit pretium. Fusce tincidunt, est nec ultrices efficitur, enim neque efficitur ligula, ac porttitor lectus arcu ac diam. Nulla vel convallis arcu. Donec pellentesque a felis ut dictum. Nam ornare massa nec eros rhoncus, nec suscipit eros ullamcorper. Maecenas vitae lorem convallis nisi viverra facilisis sed at risus. Nam luctus tempus aliquet. Morbi molestie aliquet hendrerit. Fusce vulputate cursus libero id facilisis.',
      url: 'https://www.wellmark.com/employer/small-group/dental-and-vision-plans',
      isPDF: false,
    },
    {
      title:
        'Dental & Vision Insurance for Iowa and South Dakota Mid-Size Groups ',
      link: '#',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac ullamcorper diam. Ut tristique suscipit faucibus. Phasellus nec faucibus sem. Curabitur vulputate tellus at metus rutrum, non scelerisque lectus ultricies. Nulla ultricies purus vitae sagittis placerat. Mauris sit amet nisl ut felis tempor facilisis. Nullam laoreet libero fermentum turpis tincidunt, ac malesuada dolor dapibus. Maecenas sit amet rutrum elit.',
      url: 'https://www.wellmark.com/employer/small-group/dental-and-vision-plans',
      isPDF: false,
    },
  ],
};

export default sampleData;
