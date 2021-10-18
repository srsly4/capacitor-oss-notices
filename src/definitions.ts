export interface CapacitorOSSNoticesPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
