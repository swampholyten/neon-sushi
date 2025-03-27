"use client";

import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const SignupFormSkeleton = () => {
  return (
    <Card className="w-full max-w-md mx-auto animate-pulse rounded-none md:rounded-md">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          <Skeleton className="h-8 w-40 mx-auto" />
        </CardTitle>
        <CardDescription className="text-center">
          <Skeleton className="h-4 w-64 mx-auto" />
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div>
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div>
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-10 w-full" />
        </div>
        <Skeleton className="h-10 w-full" />

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <Skeleton className="h-10 w-full" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
        </p>
        <Skeleton className="h-4 w-20 inline-block" />
      </CardFooter>
    </Card>
  );
};
