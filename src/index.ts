import { registerPlugin } from '@capacitor/core';

import type { CapacitorOSSNoticesPlugin } from './definitions';

const CapacitorOSSNotices = registerPlugin<CapacitorOSSNoticesPlugin>(
  'CapacitorOSSNotices',
  {
    web: () => import('./web').then(m => new m.CapacitorOSSNoticesWeb()),
  },
);

export * from './definitions';
export { CapacitorOSSNotices };
