"use client";

import React from "react";

import AuthForm from "@/app/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/validations";

const SignUp = () => (
  <AuthForm
    formType="SIGN_UP"
    schema={SignUpSchema}
    defaultValues={{ email: "", password: "", name: "", username: "" }}
    onSubmit={(data) => Promise.resolve({ success: true })}
  />
);

export default SignUp;
