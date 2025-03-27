import { ReactNode } from "react";
import Image from "next/image";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen items-center justify-center w-full">
      <div className="w-full max-w-[450px]">
        <div className="w-full h-42 md:h-48 lg:h-56 relative mb-4">
          <Image
            src="https://images.unsplash.com/photo-1575872058841-955be84be5e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxzdXNoaXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Auth Image"
            fill
            className="object-cover rounded-md"
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
