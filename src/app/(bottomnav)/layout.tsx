import BottomNav from "@/components/layout/bottom-nav";
import AvatarSection from "./AvatarSection";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-50 w-full h-full flex flex-col  justify-center items-center relative">
      <div className="absolute top-4 right-4 z-10">
        <AvatarSection />
      </div>

      <div className="flex-1 p-3">{children}</div>
      <BottomNav />
    </div>
  );
}
