import '@/app/ui/global.css';
import WaterEffect from '@/components/WaterEffect';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <WaterEffect radius={200} />
    </html>
  );
}
