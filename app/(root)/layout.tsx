import { ReactNode } from "react";

import Navbar from "@/components/navigation/navbar";

const RootLayout = ({ children }: { children: ReactNode }) => (
  <main>
    <Navbar />

    {children}
  </main>
);

export default RootLayout;
