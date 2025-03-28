import { CartProvider } from "@/components/providers/cart-provider";
import Navbar from "@/components/store/navbar";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <CartProvider>
        <div className="h-screen flex flex-col">
          <Navbar />
          {children}
          <footer className="border-t">
            <div className="flex flex-col gap-4 px-4 py-6 md:flex-row md:items-center md:gap-8 md:px-6 md:py-8">
              <div className="flex-1 text-center md:text-left">
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} Neon Sushi. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </CartProvider>
    </>
  );
};

export default DashboardLayout;
