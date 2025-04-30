import BottomNav from "@/components/layout/bottom-nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full flex flex-col  justify-center items-center">
      <div className="flex-1 p-3">{children}</div>
      <BottomNav />
    </div>
  );
}
