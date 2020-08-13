/**
 * Represents the _Payment_ model
 *
 * ```yaml
 * id: string;
 * cardExpirationDate: string;
 * cardName: string;
 * cardNumber: string;
 * cvv: number;
 * ```
 */
export interface Payment {
  id: string;
  cardExpirationDate: string;
  cardName: string;
  cardNumber: string;
  cvv: number;
}
