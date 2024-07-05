import './global.css';

export const metadata = {
  title: 'Welcome to UI Kit Figma',
  description: 'Managing tool for styles from UI Kit Figma',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
