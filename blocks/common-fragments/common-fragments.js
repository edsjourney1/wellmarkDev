import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';
import generateSocial from './generateSocial.js';

export default async function decorate() { // block
  const socialMeta = getMetadata('/content-fragments/blog-social-fragment');
  const socialPath = socialMeta
    ? new URL(socialMeta, window.location).pathname
    : '/content-fragments/blog-social-fragment';
  const socialfragment = await loadFragment(socialPath);
  generateSocial(socialfragment);

  // const blueSubscribeMeta = getMetadata('/content-fragments/subscribe-newsletter-blue-fragment');
  // const blueSubscribePath = blueSubscribeMeta
  //   ? new URL(blueSubscribeMeta, window.location).pathname
  //   : '/content-fragments/subscribe-newsletter-blue-fragment';
  // const blueSubscribefragment = await loadFragment(blueSubscribePath);

  // console.log('==============blueSubscribefragment', blueSubscribefragment);
}
