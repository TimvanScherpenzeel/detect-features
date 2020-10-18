// Application
import { getFeatures } from '../src';

(async () => {
  const data = await getFeatures();

  document.body.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
})();
