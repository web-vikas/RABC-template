"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface cardWrapperProps {
  children: React.ReactNode;
  headerLabel?: string;
  headerSubLabel?: string;
  headerLabelPosition?: "left" | "center";
  footerContent?: React.ReactNode;
}

export const CardWrapper = ({
  children,
  headerLabel,
  headerSubLabel,
  headerLabelPosition = "left",
  footerContent,
}: cardWrapperProps) => {
  return (
    <Card className="bg-white rounded-md h-full w-full">
      <CardHeader>
        <h1 className={cn(`text-${headerLabelPosition}`, "font-bold text-3xl")}>
          {headerLabel}
        </h1>
        <p
          className={cn(
            `text-${headerLabelPosition}`,
            "font-medium text-black/80"
          )}
        >
          {headerSubLabel}
        </p>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>{footerContent}</CardFooter>
    </Card>
  );
};
