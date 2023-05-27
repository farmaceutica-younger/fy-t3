export const pageview = (url: string) => {
  (window as unknown as any)?.gtag(
    "config",
    process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
    {
      page_path: url,
    },
  );
};

// log specific events happening.
export const event = ({ action, params }: any) => {
  (window as unknown as any)?.gtag("event", action, params);
};
