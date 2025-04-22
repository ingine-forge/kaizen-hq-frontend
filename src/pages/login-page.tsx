import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Card, CardContent } from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// import { useAPIKeyStore } from "@/store/api-store";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// import { verifyAPIKey } from "@/lib/auth";
// import { useState } from "react";
// import { Loader2 } from "lucide-react";
// import { useAuthStore } from "@/store/auth-store";

const loginFormSchema = z.object({
  username: z.string().nonempty("Username cannot be empty"),
  password: z.string().nonempty("Password cannot be empty"),
});

const registrationFormSchema = z.object({
  username: z.string().nonempty("Username cannot be empty"),
  password: z.string().nonempty("Password cannot be empty"),
  apiKey: z
    .string()
    .nonempty("API Key cannot be empty")
    .min(16, "API key must be 16 characters long.")
    .max(16, "API key must be 16 characters long."),
  tornID: z
    .number({ message: "Torn ID must be numbers" })
    .nonnegative("Can only be positive number"),
});

export const Login = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const loginForm = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const registrationForm = useForm<z.infer<typeof registrationFormSchema>>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      username: "",
      password: "",
      apiKey: "",
      tornID: undefined,
    },
  });

  // const { updateApiKey } = useAPIKeyStore();
  // const { setAuthentication } = useAuthStore();

  // async function onSubmit(values: z.infer<typeof formSchema>) {
  //   setIsLoading(true);
  //   try {
  //     const isApiKeyValid = await verifyAPIKey(values.apiKey);
  //     if (isApiKeyValid) {
  //       updateApiKey(values.apiKey);
  //       setAuthentication(true);
  //     } else if (isApiKeyValid === false) {
  //       form.setError("apiKey", { message: "Incorrect API Key" });
  //     }
  //     setIsLoading(false);
  //   } catch (e) {
  //     console.log(e);
  //     form.setError("apiKey", {
  //       message: "Something went wrong, please try again later.",
  //     });
  //     setIsLoading(false);
  //   }
  // }

  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="flex items-center justify-center h-dvh">
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-8 text-center">
          Kaizen HQ
        </h1>
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger
              className="uppercase font-bold cursor-pointer data-[state=active]:cursor-default"
              value="account"
            >
              Log in
            </TabsTrigger>
            <TabsTrigger
              className="uppercase font-bold cursor-pointer data-[state=active]:cursor-default"
              value="password"
            >
              Sign up
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardContent className="space-y-2">
                <Form {...loginForm}>
                  <form
                    onSubmit={loginForm.handleSubmit(onSubmit)}
                    className="space-y-2"
                  >
                    <FormField
                      control={loginForm.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Username</FormLabel>
                          <FormControl>
                            <Input {...field} autoComplete="off" />
                          </FormControl>
                          <FormMessage />
                          <FormDescription className="text-center"></FormDescription>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={loginForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              {...field}
                              autoComplete="off"
                            />
                          </FormControl>
                          <FormMessage />
                          <FormDescription className="text-center"></FormDescription>
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full uppercase">
                      Submit
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardContent className="space-y-2">
                <Form {...registrationForm}>
                  <form
                    onSubmit={registrationForm.handleSubmit(onSubmit)}
                    className="space-y-2"
                  >
                    <FormField
                      control={registrationForm.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Username</FormLabel>
                          <FormControl>
                            <Input {...field} autoComplete="off" />
                          </FormControl>
                          <FormMessage />
                          <FormDescription className="text-center"></FormDescription>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={registrationForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              {...field}
                              autoComplete="off"
                            />
                          </FormControl>
                          <FormMessage />
                          <FormDescription className="text-center"></FormDescription>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={registrationForm.control}
                      name="apiKey"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>API Key</FormLabel>
                          <FormControl>
                            <Input {...field} autoComplete="off" />
                          </FormControl>
                          <FormMessage />
                          <FormDescription className="text-center"></FormDescription>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={registrationForm.control}
                      name="tornID"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Torn ID</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="number"
                              autoComplete="off"
                            />
                          </FormControl>
                          <FormMessage />
                          <FormDescription className="text-center"></FormDescription>
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full uppercase">
                      Submit
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Login;
