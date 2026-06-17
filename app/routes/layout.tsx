import { Outlet } from "react-router";
import MainNavbar from "~/components/shared/navbar";
import OfflineBanner from "~/components/shared/offline-banner";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNavbar />
      <OfflineBanner />
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
    </div>
  );
}
