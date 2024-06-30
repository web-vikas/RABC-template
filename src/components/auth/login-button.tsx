"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}
export const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();
  const onCLick = () => {
    console.log("Login Button Clicked");
    router.push("/auth/login");
  };

  if (mode == "modal") {
    return <span>To do modal List</span>;
  }

  return (
    <span onClick={onCLick} className="cursor-pointer">
      {children}
    </span>
  );
};
