import { WebPlugin } from '@capacitor/core';

import type { CapacitorOSSNoticesPlugin } from './definitions';

export class CapacitorOSSNoticesWeb
  extends WebPlugin
  implements CapacitorOSSNoticesPlugin {

  showNotices(): Promise<void> {
    throw new Error('Not supported platform: web');
  }
}
