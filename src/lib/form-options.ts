/** Options shared by the forms (client) and the API validation (server). */

export const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
] as const;

export const CONTACT_TOPICS = {
  general: 'General question',
  order: 'An order',
  reservation: 'A reservation',
  private: 'Group booking or event',
  allergy: 'Allergies and ingredients',
  feedback: 'Feedback',
} as const;

export const GUEST_OPTIONS = ['1', '2', '3', '4', '5', '6', '7', '8', '9+'] as const;
