import Link from 'next/link';

/** Inline error text for a field, linked via aria-describedby. */
export function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p className="field-error" id={`${id}-error`} role="alert">
      {message}
    </p>
  );
}

/** Props that mark an input invalid and connect it to its error message. */
export function errorProps(id: string, message?: string) {
  return message ? { 'aria-invalid': true as const, 'aria-describedby': `${id}-error` } : {};
}

/** Hidden field that real visitors never fill. Bots that do are silently dropped by the API. */
export function Honeypot() {
  return (
    <div className="hp" aria-hidden="true">
      <label>
        Leave this empty
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}

/** Required GDPR consent checkbox with a link to the privacy policy. */
export function Consent({ id, error, children }: { id: string; error?: string; children?: React.ReactNode }) {
  return (
    <div className="field">
      <label className="check" htmlFor={id}>
        <input type="checkbox" id={id} name="consent" required {...errorProps(id, error)} />
        <span>
          {children ?? 'I agree that my details are used to handle this request.'} See our{' '}
          <Link href="/datenschutz" target="_blank">
            privacy policy
          </Link>
          .
        </span>
      </label>
      <FieldError id={id} message={error} />
    </div>
  );
}
