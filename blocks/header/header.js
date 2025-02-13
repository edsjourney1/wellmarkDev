import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';
import { formMainHeader } from './formMainHeader.js';

export default async function decorate(block) {
  const thisBlock = block;
  const siteHeaderMeta = getMetadata('/content-fragments/siteheader-fragment');
  const siteHeaderPath = siteHeaderMeta
    ? new URL(siteHeaderMeta, window.location).pathname
    : '/content-fragments/siteheader-fragment';

  const thisFragment = await loadFragment(siteHeaderPath);

  const alertBlockrMeta = getMetadata('/content-fragments/alert-states');
  const alertBlockPath = alertBlockrMeta
    ? new URL(alertBlockrMeta, window.location).pathname
    : '/content-fragments/alert-states';

  const alertFragment = await loadFragment(alertBlockPath);

  formMainHeader(thisBlock, thisFragment, alertFragment);
}
