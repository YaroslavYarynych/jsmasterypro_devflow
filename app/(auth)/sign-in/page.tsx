"use client";

import React from "react";

import AuthForm from "@/app/components/forms/AuthForm";
import { SignInSchema } from "@/lib/validations";

const SignIn = () => (
  <AuthForm
    formType="SIGN_IN"
    schema={SignInSchema}
    defaultValues={{ email: "", password: "" }}
    onSubmit={(data) => Promise.resolve({ success: true })}
  />
);

export default SignIn;
