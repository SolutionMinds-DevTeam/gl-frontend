'use client';
import { usePathname } from 'next/navigation';
import Header from "@/components/menu/Header";  
import Footer from "@/components/menu/Footer";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const hideFooter = pathname === '/auth/login' || pathname === '/auth/signup';

  return (
    <>
      <Header />
      {children}
      {!hideFooter && <Footer />}
    </>
  );
}
