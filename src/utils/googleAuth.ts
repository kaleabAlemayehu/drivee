export const loadGoogleScript = (): Promise<void> => {
  return new Promise((resolve) => {
    if (window.google?.accounts) return resolve();
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = false;
    script.defer = false;
    script.onload = () => resolve();
    document.head.appendChild(script);
  });
};
