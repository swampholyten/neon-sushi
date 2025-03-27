import { CartProvider } from "@/components/providers/cart-provider";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <CartProvider>{children}</CartProvider>; ;
    </>
  );
};

export default DashboardLayout;
