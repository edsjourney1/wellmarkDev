// import { getMetadata } from '../../scripts/aem.js';
// import { loadFragment } from '../fragment/fragment.js';

const myJson = [
  {
    path: '/nutrition/nutrition1',
    url: 'https://main--wellmark--anutyagi007.aem.live/nutrition/nutrition1',
    description: 'If you have prescription drug coverage through Wellmark, this information can help you and your health care provider get the most from your prescription drug ...',
    title: 'Nutrition 1',
    image: 'https://main--wellmark--anutyagi007.aem.live/nutrition/media_16c00edee537dcf06b1b8df1704ff248f3dc5cd57.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '02/10/2024',
    readTime: '5',
    category: ['Nutrition1', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738307040',
    author: 'Raj',
  },
  {
    path: '/medicare/medicare11',
    url: 'https://main--wellmark--anutyagi007.aem.live/medicare/medicare11',
    description: 'This is what 150-character text looks like. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dol.Enter your text.Enter your text. This ...',
    title: 'Medicare 11',
    image: 'https://main--wellmark--anutyagi007.aem.live/medicare/media_1073cd3ad3615e27658167fabe91670378e2aef59.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '06/11/2024',
    readTime: '5',
    category: ['Nutrition1', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738305692',
    author: 'Muthu',
  },
  {
    path: '/medicare/medicare15',
    url: 'https://main--wellmark--anutyagi007.aem.live/medicare/medicare15',
    description: 'If you have prescription drug coverage through Wellmark, this information can help you and your health care provider get the most from your prescription drug ...',
    title: 'Medicare 15',
    image: 'https://main--wellmark--anutyagi007.aem.live/medicare/media_1ce5fd2ac8e8b4aae365cb821cc1660a8cdff4684.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '28/10/2024',
    readTime: '5',
    category: ['Nutrition1', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738306803',
    author: 'Muthu',
  },
  {
    path: '/medicare/medicare13',
    url: 'https://main--wellmark--anutyagi007.aem.live/medicare/medicare13',
    description: 'This is what 150-character text looks like. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dol.Enter your text.Enter your text. This ...',
    title: 'Medicare 13',
    image: 'https://main--wellmark--anutyagi007.aem.live/medicare/media_1d5f117b5848a8350ae9da153e0bb8f74c28f1cbb.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '11/11/2024',
    readTime: '5',
    category: ['Nutrition1', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738305799',
    author: 'Muthu',
  },
  {
    path: '/medicare/medicare14',
    url: 'https://main--wellmark--anutyagi007.aem.live/medicare/medicare14',
    description: 'If you have prescription drug coverage through Wellmark, this information can help you and your health care provider get the most from your prescription drug ...',
    title: 'Medicare 14',
    image: 'https://main--wellmark--anutyagi007.aem.live/medicare/media_145fbb24470a45b7967b3c63d08475149f75fd0b2.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '10/11/2024',
    readTime: '5',
    category: ['Nutrition1', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738305770',
    author: 'Muthu',
  },
  {
    path: '/medicare/medicare12',
    url: 'https://main--wellmark--anutyagi007.aem.live/medicare/medicare12',
    description: 'If you have prescription drug coverage through Wellmark, this information can help you and your health care provider get the most from your prescription drug ...',
    title: 'Medicare 12',
    image: 'https://main--wellmark--anutyagi007.aem.live/medicare/media_1ce5fd2ac8e8b4aae365cb821cc1660a8cdff4684.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '09/11/2024',
    readTime: '5',
    category: ['Nutrition1', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738305716',
    author: 'Muthu',
  },
  {
    path: '/nutrition/nutrition2',
    url: 'https://main--wellmark--anutyagi007.aem.live/nutrition/nutrition2',
    description: 'If you have prescription drug coverage through Wellmark, this information can help you and your health care provider get the most from your prescription drug ...',
    title: 'Nutrition 2',
    image: 'https://main--wellmark--anutyagi007.aem.live/nutrition/media_1ce5fd2ac8e8b4aae365cb821cc1660a8cdff4684.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '28/10/2024',
    readTime: '5',
    category: ['Nutrition1', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738305853',
    author: 'Raj',
  },
  {
    path: '/medicare/medicare20',
    url: 'https://main--wellmark--anutyagi007.aem.live/medicare/medicare20',
    description: 'If you have prescription drug coverage through Wellmark, this information can help you and your health care provider get the most from your prescription drug ...',
    title: 'Medicare 20',
    image: 'https://main--wellmark--anutyagi007.aem.live/medicare/media_1ce5fd2ac8e8b4aae365cb821cc1660a8cdff4684.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '18/11/2024',
    readTime: '5',
    category: ['Nutrition1', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738305983',
    author: 'Muthu',
  },
  {
    path: '/medicare/medicare19',
    url: 'https://main--wellmark--anutyagi007.aem.live/medicare/medicare19',
    description: 'This is what 150-character text looks like. Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
    title: 'Medicare 19',
    image: 'https://main--wellmark--anutyagi007.aem.live/medicare/media_1073cd3ad3615e27658167fabe91670378e2aef59.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '16/11/2024',
    readTime: '5',
    category: ['Nutrition1', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738305963',
    author: 'Muthu',
  },
  {
    path: '/medicare/medicare18',
    url: 'https://main--wellmark--anutyagi007.aem.live/medicare/medicare18',
    description: 'If you have prescription drug coverage through Wellmark, this information can help you and your health care provider get the most from your prescription drug ...',
    title: 'Medicare 18',
    image: 'https://main--wellmark--anutyagi007.aem.live/medicare/media_1ce5fd2ac8e8b4aae365cb821cc1660a8cdff4684.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '15/11/2024',
    readTime: '5',
    category: ['Nutrition1', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738305941',
    author: 'Muthu',
  },
  {
    path: '/medicare/medicare17',
    url: 'https://main--wellmark--anutyagi007.aem.live/medicare/medicare17',
    description: 'If you have prescription drug coverage through Wellmark, this information can help you and your health care provider get the most from your prescription drug ...',
    title: 'Medicare 17',
    image: 'https://main--wellmark--anutyagi007.aem.live/medicare/media_1073cd3ad3615e27658167fabe91670378e2aef59.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '14/11/2024',
    readTime: '5',
    category: ['Nutrition1', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738305923',
    author: 'Muthu',
  },
  {
    path: '/medicare/medicare16',
    url: 'https://main--wellmark--anutyagi007.aem.live/medicare/medicare16',
    description: 'If you have prescription drug coverage through Wellmark, this information can help you and your health care provider get the most from your prescription drug ...',
    title: 'Medicare 16',
    image: 'https://main--wellmark--anutyagi007.aem.live/medicare/media_145fbb24470a45b7967b3c63d08475149f75fd0b2.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '13/11/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738305904',
    author: 'Muthu',
  },
  {
    path: '/medicare/medicare24',
    url: 'https://main--wellmark--anutyagi007.aem.live/medicare/medicare24',
    description: 'If you have prescription drug coverage through Wellmark, this information can help you and your health care provider get the most from your prescription drug ...',
    title: 'Medicare 24',
    image: 'https://main--wellmark--anutyagi007.aem.live/medicare/media_145fbb24470a45b7967b3c63d08475149f75fd0b2.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '23/11/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738306121',
    author: 'Muthu',
  },
  {
    path: '/medicare/medicare23',
    url: 'https://main--wellmark--anutyagi007.aem.live/medicare/medicare23',
    description: 'This is what 150-character text looks like. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dol.Enter your text.Enter your text. This ...',
    title: 'Medicare 23',
    image: 'https://main--wellmark--anutyagi007.aem.live/medicare/media_1d5f117b5848a8350ae9da153e0bb8f74c28f1cbb.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '21/11/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738306190',
    author: 'Muthu',
  },
  {
    path: '/medicare/medicare22',
    url: 'https://main--wellmark--anutyagi007.aem.live/medicare/medicare22',
    description: 'If you have prescription drug coverage through Wellmark, this information can help you and your health care provider get the most from your prescription drug ...',
    title: 'Medicare 22',
    image: 'https://main--wellmark--anutyagi007.aem.live/medicare/media_1ce5fd2ac8e8b4aae365cb821cc1660a8cdff4684.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '20/11/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738306199',
    author: 'Muthu',
  },
  {
    path: '/medicare/medicare21',
    url: 'https://main--wellmark--anutyagi007.aem.live/medicare/medicare21',
    description: 'This is what 150-character text looks like. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dol.Enter your text.Enter your text. This ...',
    title: 'Medicare 21',
    image: 'https://main--wellmark--anutyagi007.aem.live/medicare/media_1073cd3ad3615e27658167fabe91670378e2aef59.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '19/11/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738306195',
    author: 'Muthu',
  },
  {
    path: '/medicare/medicare25',
    url: 'https://main--wellmark--anutyagi007.aem.live/medicare/medicare25',
    description: 'If you have prescription drug coverage through Wellmark, this information can help you and your health care provider get the most from your prescription drug ...',
    title: 'Medicare 25',
    image: 'https://main--wellmark--anutyagi007.aem.live/medicare/media_1073cd3ad3615e27658167fabe91670378e2aef59.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '30/11/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738306090',
    author: 'Muthu',
  },
  {
    path: '/medicare/medicare1',
    url: 'https://main--wellmark--anutyagi007.aem.live/medicare/medicare1',
    description: 'If you have prescription drug coverage through Wellmark, this information can help you and your health care provider get the most from your prescription drug ...',
    title: 'Medicare 1',
    image: 'https://main--wellmark--anutyagi007.aem.live/medicare/media_1ce5fd2ac8e8b4aae365cb821cc1660a8cdff4684.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '28/10/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738306577',
    author: 'Muthu',
  },
  {
    path: '/medicare/medicare3',
    url: 'https://main--wellmark--anutyagi007.aem.live/medicare/medicare3',
    description: 'If you have prescription drug coverage through Wellmark, this information can help you and your health care provider get the most from your prescription drug ...',
    title: 'Medicare 3',
    image: 'https://main--wellmark--anutyagi007.aem.live/medicare/media_1ce5fd2ac8e8b4aae365cb821cc1660a8cdff4684.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '28/10/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738306760',
    author: 'Muthu',
  },
  {
    path: '/medicare/medicare4',
    url: 'https://main--wellmark--anutyagi007.aem.live/medicare/medicare4',
    description: 'If you have prescription drug coverage through Wellmark, this information can help you and your health care provider get the most from your prescription drug ...',
    title: 'Medicare 4',
    image: 'https://main--wellmark--anutyagi007.aem.live/medicare/media_145fbb24470a45b7967b3c63d08475149f75fd0b2.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '29/10/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738305365',
    author: 'Muthu',
  },
  {
    path: '/medicare/medicare5',
    url: 'https://main--wellmark--anutyagi007.aem.live/medicare/medicare5',
    description: 'If you have prescription drug coverage through Wellmark, this information can help you and your health care provider get the most from your prescription drug ...',
    title: 'Medicare 5',
    image: 'https://main--wellmark--anutyagi007.aem.live/medicare/media_1d5f117b5848a8350ae9da153e0bb8f74c28f1cbb.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '24/10/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738306594',
    author: 'Muthu',
  },
  {
    path: '/medicare/medicare2',
    url: 'https://main--wellmark--anutyagi007.aem.live/medicare/medicare2',
    description: 'If you have prescription drug coverage through Wellmark, this information can help you and your health care provider get the most from your prescription drug ...',
    title: 'Medicare 2',
    image: 'https://main--wellmark--anutyagi007.aem.live/medicare/media_1ce5fd2ac8e8b4aae365cb821cc1660a8cdff4684.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '28/10/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738305292',
    author: 'Muthu',
  },
  {
    path: '/medicare/medicare6',
    url: 'https://main--wellmark--anutyagi007.aem.live/medicare/medicare6',
    description: 'If you have prescription drug coverage through Wellmark, this information can help you and your health care provider get the most from your prescription drug ...',
    title: 'Medicare 6',
    image: 'https://main--wellmark--anutyagi007.aem.live/medicare/media_145fbb24470a45b7967b3c63d08475149f75fd0b2.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '02/11/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738305554',
    author: 'Muthu',
  },
  {
    path: '/medicare/medicare7',
    url: 'https://main--wellmark--anutyagi007.aem.live/medicare/medicare7',
    description: 'If you have prescription drug coverage through Wellmark, this information can help you and your health care provider get the most from your prescription drug ...',
    title: 'Medicare 7',
    image: 'https://main--wellmark--anutyagi007.aem.live/medicare/media_1073cd3ad3615e27658167fabe91670378e2aef59.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '03/11/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738305551',
    author: 'Muthu',
  },
  {
    path: '/medicare/medicare8',
    url: 'https://main--wellmark--anutyagi007.aem.live/medicare/medicare8',
    description: 'If you have prescription drug coverage through Wellmark, this information can help you and your health care provider get the most from your prescription drug ...',
    title: 'Medicare 8',
    image: 'https://main--wellmark--anutyagi007.aem.live/medicare/media_1ce5fd2ac8e8b4aae365cb821cc1660a8cdff4684.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '05/11/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738305572',
    author: 'Muthu',
  },
  {
    path: '/medicare/medicare9',
    url: 'https://main--wellmark--anutyagi007.aem.live/medicare/medicare9',
    description: 'This is what 150-character text looks like. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aeneamodo ligula eget dol.Enter your text.',
    title: 'Medicare 9',
    image: 'https://main--wellmark--anutyagi007.aem.live/medicare/media_1b9a42083a90e491e4986172ef49fc0fb8a682a6d.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '06/11/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738305586',
    author: 'Muthu',
  },
  {
    path: '/medicare/medicare10',
    url: 'https://main--wellmark--anutyagi007.aem.live/medicare/medicare10',
    description: 'If you have prescription drug coverage through Wellmark, this information can help you and your health care provider get the most from your prescription drug ...',
    title: 'Medicare 10',
    image: 'https://main--wellmark--anutyagi007.aem.live/medicare/media_1073cd3ad3615e27658167fabe91670378e2aef59.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '08/11/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738305603',
    author: 'Muthu',
  },
  {
    path: '/nutrition/nutrition8',
    url: 'https://main--wellmark--anutyagi007.aem.live/nutrition/nutrition8',
    description: 'If you have prescription drug coverage through Wellmark, this information can help you and your health care provider get the most from your prescription drug ...',
    title: 'Nutrition 8',
    image: 'https://main--wellmark--anutyagi007.aem.live/nutrition/media_1ce5fd2ac8e8b4aae365cb821cc1660a8cdff4684.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '05/11/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738306410',
    author: 'Raj',
  },
  {
    path: '/nutrition/nutrition9',
    url: 'https://main--wellmark--anutyagi007.aem.live/nutrition/nutrition9',
    description: 'This is what 150-character text looks like. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aeneamodo ligula eget dol.Enter your text.',
    title: 'Nutrition 9',
    image: 'https://main--wellmark--anutyagi007.aem.live/nutrition/media_1b9a42083a90e491e4986172ef49fc0fb8a682a6d.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '06/11/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738306489',
    author: 'Raj',
  },
  {
    path: '/nutrition/nutrition5',
    url: 'https://main--wellmark--anutyagi007.aem.live/nutrition/nutrition5',
    description: 'If you have prescription drug coverage through Wellmark, this information can help you and your health care provider get the most from your prescription drug ...',
    title: 'Nutrition 5',
    image: 'https://main--wellmark--anutyagi007.aem.live/nutrition/media_1d5f117b5848a8350ae9da153e0bb8f74c28f1cbb.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '24/10/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738306293',
    author: 'Raj',
  },
  {
    path: '/nutrition/nutrition4',
    url: 'https://main--wellmark--anutyagi007.aem.live/nutrition/nutrition4',
    description: 'If you have prescription drug coverage through Wellmark, this information can help you and your health care provider get the most from your prescription drug ...',
    title: 'Nutrition 4',
    image: 'https://main--wellmark--anutyagi007.aem.live/nutrition/media_145fbb24470a45b7967b3c63d08475149f75fd0b2.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '29/10/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738306250',
    author: 'Raj',
  },
  {
    path: '/nutrition/nutrition7',
    url: 'https://main--wellmark--anutyagi007.aem.live/nutrition/nutrition7',
    description: 'If you have prescription drug coverage through Wellmark, this information can help you and your health care provider get the most from your prescription drug ...',
    title: 'Nutrition 7',
    image: 'https://main--wellmark--anutyagi007.aem.live/nutrition/media_1073cd3ad3615e27658167fabe91670378e2aef59.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '03/11/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738306398',
    author: 'Raj',
  },
  {
    path: '/nutrition/nutrition15',
    url: 'https://main--wellmark--anutyagi007.aem.live/nutrition/nutrition15',
    description: 'If you have prescription drug coverage through Wellmark, this information can help you and your health care provider get the most from your prescription drug ...',
    title: 'Nutrition 15',
    image: 'https://main--wellmark--anutyagi007.aem.live/nutrition/media_1073cd3ad3615e27658167fabe91670378e2aef59.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '12/11/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738306582',
    author: 'Raj',
  },
  {
    path: '/nutrition/nutrition12',
    url: 'https://main--wellmark--anutyagi007.aem.live/nutrition/nutrition12',
    description: 'If you have prescription drug coverage through Wellmark, this information can help you and your health care provider get the most from your prescription drug ...',
    title: 'Nutrition 12',
    image: 'https://main--wellmark--anutyagi007.aem.live/nutrition/media_1ce5fd2ac8e8b4aae365cb821cc1660a8cdff4684.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '09/11/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738306593',
    author: 'Raj',
  },
  {
    path: '/nutrition/nutrition11',
    url: 'https://main--wellmark--anutyagi007.aem.live/nutrition/nutrition11',
    description: 'This is what 150-character text looks like. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dol.Enter your text.Enter your text. This ...',
    title: 'Nutrition 11',
    image: 'https://main--wellmark--anutyagi007.aem.live/nutrition/media_1073cd3ad3615e27658167fabe91670378e2aef59.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '06/11/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738306597',
    author: 'Raj',
  },
  {
    path: '/nutrition/nutrition10',
    url: 'https://main--wellmark--anutyagi007.aem.live/nutrition/nutrition10',
    description: 'If you have prescription drug coverage through Wellmark, this information can help you and your health care provider get the most from your prescription drug ...',
    title: 'Nutrition 10',
    image: 'https://main--wellmark--anutyagi007.aem.live/nutrition/media_1073cd3ad3615e27658167fabe91670378e2aef59.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '08/11/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738306476',
    author: 'Raj',
  },
  {
    path: '/nutrition/nutrition17',
    url: 'https://main--wellmark--anutyagi007.aem.live/nutrition/nutrition17',
    description: 'If you have prescription drug coverage through Wellmark, this information can help you and your health care provider get the most from your prescription drug ...',
    title: 'Nutrition 17',
    image: 'https://main--wellmark--anutyagi007.aem.live/nutrition/media_1073cd3ad3615e27658167fabe91670378e2aef59.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '14/11/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738306712',
    author: 'Raj',
  },
  {
    path: '/nutrition/nutrition6',
    url: 'https://main--wellmark--anutyagi007.aem.live/nutrition/nutrition6',
    description: 'If you have prescription drug coverage through Wellmark, this information can help you and your health care provider get the most from your prescription drug ...',
    title: 'Nutrition 6',
    image: 'https://main--wellmark--anutyagi007.aem.live/nutrition/media_145fbb24470a45b7967b3c63d08475149f75fd0b2.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '02/11/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738306314',
    author: 'Raj',
  },
  {
    path: '/nutrition/nutrition20',
    url: 'https://main--wellmark--anutyagi007.aem.live/nutrition/nutrition20',
    description: 'If you have prescription drug coverage through Wellmark, this information can help you and your health care provider get the most from your prescription drug ...',
    title: 'Nutrition 20',
    image: 'https://main--wellmark--anutyagi007.aem.live/nutrition/media_1ce5fd2ac8e8b4aae365cb821cc1660a8cdff4684.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '18/11/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738306738',
    author: 'Raj',
  },
  {
    path: '/nutrition/nutrition19',
    url: 'https://main--wellmark--anutyagi007.aem.live/nutrition/nutrition19',
    description: 'This is what 150-character text looks like. Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
    title: 'Nutrition 19',
    image: 'https://main--wellmark--anutyagi007.aem.live/nutrition/media_1073cd3ad3615e27658167fabe91670378e2aef59.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '16/11/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738306728',
    author: 'Raj',
  },
  {
    path: '/nutrition/nutrition13',
    url: 'https://main--wellmark--anutyagi007.aem.live/nutrition/nutrition13',
    description: 'This is what 150-character text looks like. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dol.Enter your text.Enter your text. This ...',
    title: 'Nutrition 13',
    image: 'https://main--wellmark--anutyagi007.aem.live/nutrition/media_1d5f117b5848a8350ae9da153e0bb8f74c28f1cbb.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '11/11/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738306585',
    author: 'Raj',
  },
  {
    path: '/nutrition/nutrition25',
    url: 'https://main--wellmark--anutyagi007.aem.live/nutrition/nutrition25',
    description: 'If you have prescription drug coverage through Wellmark, this information can help you and your health care provider get the most from your prescription drug ...',
    title: 'Nutrition 25',
    image: 'https://main--wellmark--anutyagi007.aem.live/nutrition/media_1073cd3ad3615e27658167fabe91670378e2aef59.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '30/11/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738306860',
    author: 'Raj',
  },
  {
    path: '/nutrition/nutrition23',
    url: 'https://main--wellmark--anutyagi007.aem.live/nutrition/nutrition23',
    description: 'This is what 150-character text looks like. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dol.Enter your text.Enter your text. This ...',
    title: 'Nutrition 23',
    image: 'https://main--wellmark--anutyagi007.aem.live/nutrition/media_1d5f117b5848a8350ae9da153e0bb8f74c28f1cbb.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '21/11/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738306833',
    author: 'Raj',
  },
  {
    path: '/nutrition/nutrition3',
    url: 'https://main--wellmark--anutyagi007.aem.live/nutrition/nutrition3',
    description: 'If you have prescription drug coverage through Wellmark, this information can help you and your health care provider get the most from your prescription drug ...',
    title: 'Nutrition 3',
    image: 'https://main--wellmark--anutyagi007.aem.live/nutrition/media_16c00edee537dcf06b1b8df1704ff248f3dc5cd57.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '22/11/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738307099',
    author: 'Raj',
  },
  {
    path: '/nutrition/nutrition24',
    url: 'https://main--wellmark--anutyagi007.aem.live/nutrition/nutrition24',
    description: 'If you have prescription drug coverage through Wellmark, this information can help you and your health care provider get the most from your prescription drug ...',
    title: 'Nutrition 24',
    image: 'https://main--wellmark--anutyagi007.aem.live/nutrition/media_145fbb24470a45b7967b3c63d08475149f75fd0b2.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '23/11/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738306847',
    author: 'Raj',
  },
  {
    path: '/nutrition/nutrition22',
    url: 'https://main--wellmark--anutyagi007.aem.live/nutrition/nutrition22',
    description: 'If you have prescription drug coverage through Wellmark, this information can help you and your health care provider get the most from your prescription drug ...',
    title: 'Nutrition 22',
    image: 'https://main--wellmark--anutyagi007.aem.live/nutrition/media_1ce5fd2ac8e8b4aae365cb821cc1660a8cdff4684.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '20/11/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738306824',
    author: 'Raj',
  },
  {
    path: '/nutrition/nutrition18',
    url: 'https://main--wellmark--anutyagi007.aem.live/nutrition/nutrition18',
    description: 'If you have prescription drug coverage through Wellmark, this information can help you and your health care provider get the most from your prescription drug ...',
    title: 'Nutrition 18',
    image: 'https://main--wellmark--anutyagi007.aem.live/nutrition/media_1ce5fd2ac8e8b4aae365cb821cc1660a8cdff4684.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '15/11/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738306721',
    author: 'Raj',
  },
  {
    path: '/nutrition/nutrition16',
    url: 'https://main--wellmark--anutyagi007.aem.live/nutrition/nutrition16',
    description: 'If you have prescription drug coverage through Wellmark, this information can help you and your health care provider get the most from your prescription drug ...',
    title: 'Nutrition 16',
    image: 'https://main--wellmark--anutyagi007.aem.live/nutrition/media_145fbb24470a45b7967b3c63d08475149f75fd0b2.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '13/11/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738306697',
    author: 'Raj',
  },
  {
    path: '/nutrition/nutrition21',
    url: 'https://main--wellmark--anutyagi007.aem.live/nutrition/nutrition21',
    description: 'This is what 150-character text looks like. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dol.Enter your text.Enter your text. This ...',
    title: 'Nutrition 21',
    image: 'https://main--wellmark--anutyagi007.aem.live/nutrition/media_1073cd3ad3615e27658167fabe91670378e2aef59.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '19/11/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738306811',
    author: 'Raj',
  },
  {
    path: '/nutrition/nutrition14',
    url: 'https://main--wellmark--anutyagi007.aem.live/nutrition/nutrition14',
    description: 'If you have prescription drug coverage through Wellmark, this information can help you and your health care provider get the most from your prescription drug ...',
    title: 'Nutrition 14',
    image: 'https://main--wellmark--anutyagi007.aem.live/nutrition/media_145fbb24470a45b7967b3c63d08475149f75fd0b2.png?width=1200&format=pjpg&optimize=medium',
    publishedDate: '10/11/2024',
    readTime: '5',
    category: ['Nutrition', 'Category Two', 'Category Three'],
    theme: 'light',
    template: 'article',
    lastModified: '1738306557',
    author: 'Raj',
  },
];
export default async function decorate(block) {
  const categoryByauthor = block.children[1].children[1].innerText;
  const heading = block.children[0].children[0].innerText;
  const itemsPerPage = Number(block.children[1].children[0].innerText);
  const inlinewithIcon = block.children[0].children[1].innerHTML;
  const headingSpam = document.createElement('h2');
  headingSpam.classList.add('title');
  const iconwithtext = document.createElement('span');
  iconwithtext.classList.add('text-icon');
  iconwithtext.innerHTML = inlinewithIcon;
  headingSpam.append(heading);
  const headDiv = document.createElement('div');
  headDiv.classList.add('heading-div');
  headDiv.append(headingSpam, iconwithtext);
  block.innerHTML = '';
  const blockDiv = document.createElement('div');
  blockDiv.classList.add('cards-div');
  const paginationDiv = document.createElement('div');
  paginationDiv.classList.add('pagination');
  const paginationContainer = document.createElement('div');
  paginationContainer.classList.add('pagination-container');
  const countList = document.createElement('div');
  countList.classList.add('count-list');
  const countResult = document.createElement('div');
  countResult.classList.add('count-result');
  paginationContainer.append(countList, countResult);
  paginationDiv.append(paginationContainer);
  block.append(headDiv, blockDiv, paginationDiv);
  let currentPage = 1;
  const categoryBasedJson = myJson.filter((article) => article.category.includes(categoryByauthor));
  function renderItems() {
    blockDiv.innerHTML = '';
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    // eslint-disable-next-line max-len
    const jsonVar = categoryBasedJson.slice(startIndex, endIndex);
    const sortedJSON = jsonVar.sort((a, b) => {
      const dateA = new Date(a.publishedDate?.split('/').reverse().join('/'));
      const dateB = new Date(b.publishedDate?.split('/').reverse().join('/'));
      return dateA - dateB;
    });
    sortedJSON.forEach(({
      image, category, publishedDate, readTime, title,
    }) => {
      const mainDiv = document.createElement('div');
      mainDiv.classList.add('card-div');

      const imageSrc = document.createElement('img');
      imageSrc.src = image;
      imageSrc.alt = 'thumbnail';
      mainDiv.appendChild(imageSrc);

      const contentDiv = document.createElement('div');
      contentDiv.classList.add('content-div');
      mainDiv.appendChild(contentDiv);

      const mainTitle = document.createElement('h3');
      mainTitle.classList.add('card-title');
      mainTitle.textContent = title;
      contentDiv.appendChild(mainTitle);

      const datetimeDiv = document.createElement('div');
      datetimeDiv.classList.add('date-div');
      contentDiv.appendChild(datetimeDiv);

      const pubDate = document.createElement('p');
      pubDate.classList.add('date');
      pubDate.textContent = publishedDate;
      datetimeDiv.appendChild(pubDate);

      const arcretime = document.createElement('p');
      arcretime.classList.add('read-time');
      arcretime.textContent = `${readTime} min read`;
      datetimeDiv.appendChild(arcretime);

      const categoryPara = document.createElement('p');
      categoryPara.classList.add('category-list');
      contentDiv.appendChild(categoryPara);
      category.forEach((item) => {
        const anchor = document.createElement('a');
        anchor.href = 'www.google.com';
        anchor.textContent = item;
        categoryPara.appendChild(anchor);
      });
      blockDiv.appendChild(mainDiv);
    });
    countList.innerHTML = '';
    const showingText = document.createElement('p');
    showingText.textContent = 'Showing';
    countList.appendChild(showingText);
    const showingSpan = document.createElement('span');
    showingSpan.textContent = `${startIndex + 1} - ${Math.min(endIndex, categoryBasedJson.length)}`;
    countList.appendChild(showingSpan);
    const ofText = document.createElement('p');
    ofText.textContent = 'of';
    countList.appendChild(ofText);
    const ofSpan = document.createElement('span');
    ofSpan.textContent = categoryBasedJson.length;
    countList.appendChild(ofSpan);
  }

  function renderPagination() {
    const totalPages = Math.ceil(categoryBasedJson.length / itemsPerPage);
    countResult.innerHTML = '';

    // Function to create a pagination button
    function createButton(text, page) {
      const button = document.createElement('button');
      button.textContent = text;
      button.addEventListener('click', () => {
        currentPage = page;
        renderItems();
        renderPagination();
      });
      if (page === currentPage) {
        button.classList.add('active');
      }
      return button;
    }

    // Function to create an ellipsis button
    function createEllipsis() {
      const ellipsis = document.createElement('button');
      ellipsis.textContent = '...';
      ellipsis.disabled = true;
      return ellipsis;
    }

    // Create previous page button
    const previousPageButton = document.createElement('p');
    previousPageButton.innerHTML = '<i class="fa-regular fa-chevrons-left"></i>';
    previousPageButton.addEventListener('click', () => {
      currentPage = 1;
      renderItems();
      renderPagination();
    });
    countResult.appendChild(previousPageButton);

    // Create first page button
    const firstPageButton = document.createElement('p');
    firstPageButton.innerHTML = '<i class="fa-regular fa-chevron-left"></i>';
    firstPageButton.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage -= 1;
        renderItems();
        renderPagination();
      }
    });
    countResult.appendChild(firstPageButton);

    // Create pagination buttons
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i += 1) {
        countResult.appendChild(createButton(i, i));
      }
    } else if (currentPage <= 3) {
      for (let i = 1; i <= 3; i += 1) {
        countResult.appendChild(createButton(i, i));
      }
      countResult.appendChild(createEllipsis());
      countResult.appendChild(createButton(totalPages, totalPages));
    } else if (currentPage >= totalPages - 2) {
      countResult.appendChild(createButton(1, 1));
      countResult.appendChild(createEllipsis());
      for (let i = totalPages - 2; i <= totalPages; i += 1) {
        countResult.appendChild(createButton(i, i));
      }
    } else {
      countResult.appendChild(createButton(1, 1));
      countResult.appendChild(createEllipsis());
      for (let i = currentPage - 1; i <= currentPage + 1; i += 1) {
        countResult.appendChild(createButton(i, i));
      }
      countResult.appendChild(createEllipsis());
      countResult.appendChild(createButton(totalPages, totalPages));
    }

    // Create next page button
    const nextPageButton = document.createElement('p');
    nextPageButton.innerHTML = '<i class="fa-regular fa-chevron-right"></i>';
    nextPageButton.addEventListener('click', () => {
      if (currentPage < totalPages) {
        currentPage += 1;
        renderItems();
        renderPagination();
      }
    });
    countResult.appendChild(nextPageButton);

    // Create last page button
    const lastPageButton = document.createElement('p');
    lastPageButton.innerHTML = '<i class="fa-regular fa-chevrons-right"></i>';
    lastPageButton.addEventListener('click', () => {
      currentPage = totalPages;
      renderItems();
      renderPagination();
    });
    countResult.appendChild(lastPageButton);

    renderItems();
    // Get the p tag with the i tag that has the class "fa-chevrons-left"
    const doublePreviousPageButton = block.querySelector('.count-result p i.fa-chevrons-left').parentElement;
    const doubleforwardPageButton = block.querySelector('.count-result p i.fa-chevrons-right').parentElement;
    const PreviousPageButton = block.querySelector('.count-result p i.fa-chevron-left').parentElement;
    const forwardPageButton = block.querySelector('.count-result p i.fa-chevron-right').parentElement;

    // Get the first button
    const firstButton = block.querySelector('.count-result button');
    // Get all buttons
    const buttons = block.querySelectorAll('.count-result button');
    // get last button
    const lastButton = block.querySelector('.count-result button:last-of-type');
    // get the second & last before button
    const secondButton = buttons[1];
    const lastButtonBeforeLast = buttons[buttons.length - 2];

    // Check if the first button has the class "active"
    if (firstButton.classList.contains('active')) {
      // Add the class "dp-blur" to the p tag
      PreviousPageButton.classList.add('dp-blur');
    } else {
      // Remove the class "dp-blur" from the p tag
      PreviousPageButton.classList.remove('dp-blur');
    }

    // Check if the first button has the class "active"
    if (firstButton.classList.contains('active') || secondButton.classList.contains('active')) {
      // Add the class "dp-none" to the p tag
      doublePreviousPageButton.classList.add('dp-none');
    } else {
      // Remove the class "dp-none" from the p tag
      doublePreviousPageButton.classList.remove('dp-none');
    }
    // Check if the last button has the class "active"
    if (lastButton.classList.contains('active')) {
      // Add the class "dp-blur" to the p tag
      forwardPageButton.classList.add('dp-blur');
    } else {
      // Remove the class "dp-blur" from the p tag
      forwardPageButton.classList.remove('dp-blur');
    }

    // Check if the first button has the class "active"
    if (lastButton.classList.contains('active') || lastButtonBeforeLast.classList.contains('active')) {
      // Add the class "dp-none" to the p tag
      doubleforwardPageButton.classList.add('dp-none');
    } else {
      // Remove the class "dp-none" from the p tag
      doubleforwardPageButton.classList.remove('dp-none');
    }
  }
  if (myJson.length > 10) {
    renderPagination();
  } else {
    renderItems();
  }
}
