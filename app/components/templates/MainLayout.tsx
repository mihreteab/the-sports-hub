import { Outlet } from "react-router";

import Header from "../organisms/Header";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container flex flex-col mx-auto md:p-4 gap-4">
        <Outlet />
      </main>
    </div>
  );
}
