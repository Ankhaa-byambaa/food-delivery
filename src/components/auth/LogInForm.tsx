"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
export function LogInForm() {
  const formSchema = z.object({
    email: z.email(),
    password: z.string().min(6).max(10),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <>
      <div className=" flex gap-10 items-center justify-center py-10 px-10">
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-3 w-104 ">
                    <FormLabel className="font-bold text-[24px]">
                      Log in
                    </FormLabel>
                    <FormDescription className="text-4">
                      Log in to enjoy your favorite dishes.
                    </FormDescription>
                    <FormControl>
                      <Input
                        placeholder="Enter your email address"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-3 w-104 ">
                    <FormControl>
                      <Input placeholder="Password" {...field} />
                    </FormControl>
                    <FormDescription className="text-4 flex gap-2">
                      Forgot password ?
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full bg-primary" type="submit">
                Let's Go
              </Button>
              <div className="flex  gap-2">
                <p>Don’t have an account? </p>
                <a className="text-[#2563EB]" href="#">
                  Sign In
                </a>
              </div>
            </form>
          </Form>
        </div>
        <img className="w-160 h-full rounded-md" src={`signuppicture.jpg`} />
      </div>
    </>
  );
}
