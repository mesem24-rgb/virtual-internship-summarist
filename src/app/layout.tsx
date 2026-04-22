import "./globals.css";
import { Roboto } from "next/font/google";
import { AuthProvider } from "@/app/context/AuthContext";
import { LibraryProvider } from "@/app/context/LibraryContext";
import AuthModal from "@/app/components/auth/AuthModal";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AuthProvider>
          <LibraryProvider>
            {children}
            <AuthModal />
          </LibraryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
