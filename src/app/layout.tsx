import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/Header";
import SuperHeader from "@/components/SuperHeader";
import Footer from "@/components/Footer";
import SubFooter from "@/components/SubFooter";
import Sidebar from "@/components/Sidebar";

import { SidebarProvider } from "@/hooks/sidebar";

export const metadata: Metadata = {
  title: "Churrascos Ferreira",
  description: "Site oficial da empresa Churrascos Ferreira!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased overflow-x-hidden`}>
        <SuperHeader />
        <SidebarProvider>
          <Sidebar />
          <Header />
        </SidebarProvider>
        {children}
        <Footer />
        <SubFooter />
      </body>
    </html>
  );
}
