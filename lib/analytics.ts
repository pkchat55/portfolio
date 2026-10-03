type AnalyticsPayload = Record<string, string | number | boolean | undefined>;
export function track(event: string, payload: AnalyticsPayload = {}) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('portfolio:analytics', { detail: { event, ...payload } }));
  const w = window as Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag === 'function') w.gtag('event', event, payload);
  else if (Array.isArray(w.dataLayer)) w.dataLayer.push({ event, ...payload });
  // Provider adapters can subscribe to `portfolio:analytics` or be added here.
}
