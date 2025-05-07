import { RegisterForm } from "@/components/auth/AuthForms";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up - ByteLearn",
  description: "Create a new ByteLearn account",
};

export default function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 sm:px-6 lg:px-8 bg-gray-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <a href="/" className="flex items-center space-x-2">
            <img
              src="/logo.svg"
              alt="ByteLearn Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="text-2xl font-bold text-primary">ByteLearn</span>
          </a>
        </div>
        <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-gray-900">
          Create a new account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Join thousands of students learning online
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <RegisterForm />
      </div>
    </div>
  );
}
