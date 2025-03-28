"use client";

import { useState } from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ProviderButtons } from "./provider-buttons";
import { authClient } from "@/lib/auth-client";
import { fetchCallback } from "@/lib/utils";
import { LoginFormSkeleton } from "@/components/skeletons/login-form-skeleton";
import { toast } from "sonner";
import { ErrorContext } from "better-auth/client";
import { At, Password } from "@phosphor-icons/react";

const loginFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginFormValues) {
    await authClient.signIn.email(
      {
        email: values.email,
        password: values.password,
      },
      fetchCallback({
        setIsLoading,
        onError: (context: ErrorContext) => {
          toast.error(`${context.error.message}`);
        },
        onSuccess: async () => {
          await authClient.revokeOtherSessions();
          toast.success("Login Successfully");
        },
      })
    );
  }

  return isLoading ? (
    <LoginFormSkeleton />
  ) : (
    <Card className="w-full rounded-none md:rounded-md">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
        <CardDescription className="text-center">
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <At className="absolute left-3 top-1/2 -translate-y-1/2 size-4" />
                      <Input
                        placeholder="name@sushi.com"
                        type="email"
                        disabled={isLoading}
                        {...field}
                        className="pl-10 text-xs md:h-10"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Password</FormLabel>
                    <Link
                      href="/forgot-password"
                      className="text-sm text-primary hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <FormControl>
                    <div className="relative">
                      <Password className="absolute left-3 top-1/2 -translate-y-1/2 size-4" />
                      <Input
                        type="password"
                        disabled={isLoading}
                        {...field}
                        className="pl-10 text-xs md:h-10"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </Form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-neutral-900 px-2 text-muted-foreground">
                {" "}
                or{" "}
              </span>
            </div>
          </div>

          <ProviderButtons isLoading={isLoading} setIsLoading={setIsLoading} />
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};
