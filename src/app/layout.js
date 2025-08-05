
import "./globals.css";
import ClientLayout from "@/components/layouts/ClientLayout";



export const metadata = {
  title: "Groww-Library",
  description: "Grow Faster, Manage Better",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className="bg-[#EAF5F6]">
          <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
