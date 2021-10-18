import { WebPlugin } from '@capacitor/core';

import type { CapacitorOSSNoticesPlugin } from './definitions';

export class CapacitorOSSNoticesWeb
  extends WebPlugin
  implements CapacitorOSSNoticesPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
