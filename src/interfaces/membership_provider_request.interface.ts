

export interface Membership_provider_request {
  uid: string;
  name: string;
  email: string;
  phone: string;
  address?: string;
  type: 'member' | 'provider';
  additionalComments?: string;
}