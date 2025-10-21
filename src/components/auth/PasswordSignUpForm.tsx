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
export function PasswordSignUpForm({ HandleChangeStep, setEmail }: any) {
  const formSchema = z.object({
    password: z.string().min(6).max(10),
    confirmPassword: z.string().min(6).max(10),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    HandleChangeStep();
    setEmail();
  }
  return (
    <>
      <div className=" flex gap-10 items-center justify-center py-10 px-10">
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-3 w-104 ">
                    <FormLabel className="font-bold text-[24px]">
                      Create a strong password
                    </FormLabel>
                    <FormDescription className="text-4">
                      Create a strong password with letters, numbers.
                    </FormDescription>
                    <FormControl>
                      <Input placeholder="Password" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-3 w-104 ">
                    <FormControl>
                      <Input placeholder="Confirm" {...field} />
                    </FormControl>
                    <FormDescription className="text-4 flex gap-2">
                      <input type="checkbox"></input>
                      Show password
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full bg-primary" type="submit">
                <a href="./">Let's Go</a>
              </Button>
              <div className="flex  gap-2">
                <p>Already have an account? </p>
                <a className="text-[#2563EB]" href="/logInForm/">
                  Log in
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
