import { ReactNode } from "react";
import Image from "next/image";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen items-center justify-center w-full">
      <div className="w-full max-w-[450px]">
        <div className="w-full h-42 md:h-48 lg:h-56 relative mb-1">
          <Image
            src="/roll.jpeg"
            alt="Auth Image"
            fill
            className="object-cover rounded-none md:rounded-md"
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
