import { Outlet } from "react-router";

import Header from "../organisms/Header";

export default function MainLayout() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col md:p-4 gap-4 md:container mx-auto">
        <Outlet />
      </main>
    </div>
  );
}
