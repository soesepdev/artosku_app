'use client';

import NextTopLoader from 'nextjs-toploader';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader
          color="#1677ff"
          height={3}
          showSpinner={true}
          crawl={true}
          easing="ease"
          speed={200}
        />
        {children}
      </body>
    </html>
  );
}