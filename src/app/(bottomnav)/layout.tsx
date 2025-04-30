import BottomNav from "@/components/layout/bottom-nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full flex flex-col p-3 justify-center items-center">
      <div className="flex-1">{children}</div>
      <BottomNav />
    </div>
  );
}
