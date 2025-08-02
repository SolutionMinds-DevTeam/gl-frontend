import "./globals.css";
import Header from "@/components/menu/Header";  
import Footer from "@/components/menu/Footer";


export const metadata = {
  title: "Groww-Library",
  description: "Grow Faster, Manage Better",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#EAF5F6]">
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
