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
export function EmailSignUpForm({ setEmail, Email, HandleChangeStep }: any) {
  const formSchema = z.object({
    email: z.email(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    HandleChangeStep();
    setEmail(values.email);
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
                      Create your account
                    </FormLabel>
                    <FormDescription className="text-4">
                      Sign up to explore your favorite dishes.
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
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
        <img className="w-160 h-full rounded-md" src={`signuppicture.jpg`} />
      </div>
    </>
  );
}
