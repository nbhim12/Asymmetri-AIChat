"use client";
import { signIn } from "next-auth/react";
import { Button } from "../ui/button";

export default function LoginForm() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold">Sign in to continue</h1>
      <Button onClick={() => signIn("google")}>Sign in with Google</Button>
      <Button onClick={() => signIn("github")}>Sign in with GitHub</Button>
    </div>
  );
}
