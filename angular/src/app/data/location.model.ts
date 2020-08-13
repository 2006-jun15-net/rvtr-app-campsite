import { Address } from './address.model';

/**
 * Represents the _Location_ model
 *
 * id: string;
 * address: Address;
 * latitude: string;
 * longitude: string;
 */
export interface Location {
  id: string;
  address: Address;
  latitude: string;
  longitude: string;
}
