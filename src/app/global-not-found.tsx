"use client"

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubFooter from "@/components/SubFooter";
import SuperHeader from "@/components/SuperHeader";

import "./globals.css";
import Link from "next/link";
import { SidebarProvider } from "@/hooks/sidebar";
import Sidebar from "@/components/Sidebar";
import { useEffect, useRef } from "react";

export default function GlobalNotFound() {
  const videoRef = useRef<null | HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef && videoRef.current) {
      videoRef.current.play().catch(() => {
        videoRef?.current?.play();
      });
    }
  }, []);

  return (
    <html lang="pt-br">
      <body className={`antialiased overflow-x-hidden`}>
        <SuperHeader />
        <SidebarProvider>
          <Sidebar />
          <Header />
        </SidebarProvider>
        <div className="flex relative md:h-[800px] min-h-fit overflow-hidden">
          <div className="z-10 w-full h-[80vh] flex text-center flex-col justify-center items-center text-background">
            <h1 className="text-4xl">404 - Página não encontrada</h1>
            <p>
              Essa página não existe. Deseja{" "}
              <Link className="text-accent brightness-200 underline" href={"/"}>
                voltar
              </Link>
              ?
            </p>
          </div>

          <div className="flex justify-center items-center z-0 absolute top-0 left-0 w-screen h-full bg-accent3">
            <video
              src="/backgroundIntro.mp4"
              autoPlay={true}
              loop={true}
              className="pointer-events-none md:w-[1100px] max-w-[unset] h-full shadow-[0_4px_15px_rgba(0,0,0,.5)]"
              muted
              playsInline
              disablePictureInPicture
              ref={videoRef}
            ></video>
            <div className="absolute top-0 w-full h-full bg-black opacity-50 backdrop-blur z-20"></div>
          </div>
        </div>
        <Footer />
        <SubFooter />
      </body>
    </html>
  );
}
