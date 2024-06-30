import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <h1
        className={cn(
          "text-6xl font-semibold drop-shadow-md text-white",
          font.className
        )}
      >
        Appointments
      </h1>
      <p className="text-white text-lg my-5">
        A Simple Appointment Booking for patient and doctor
      </p>
      <div>
        <LoginButton>
          <Button variant="secondary" size="lg">
            Go To Login
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
