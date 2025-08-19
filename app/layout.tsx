import '@/app/ui/global.css';
import WaterEffect from '@/components/WaterEffect';
import { inter } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
      <WaterEffect radius={200} />
    </html>
  );
}
