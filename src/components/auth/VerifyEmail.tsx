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
export function VerifyEmail({ HandleChangeStep, setEmail }: any) {
  const formSchema = z.object({
    email: z.undefined,
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
    setEmail();
    HandleChangeStep();
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
                      Please verify Your Email
                    </FormLabel>
                    <FormDescription className="text-4">
                      We just sent an email to Test@gmail.com. Click the link in
                      the email to verify your account.
                    </FormDescription>
                    <FormControl></FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button className="w-full bg-primary" type="submit">
                Resend email
              </Button>
            </form>
          </Form>
        </div>
        <img className="w-160 h-full rounded-md" src={`signuppicture.jpg`} />
      </div>
    </>
  );
}
