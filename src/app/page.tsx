import { redirect } from "next/navigation";

export default function Home() {
  // Redirect to another page to avoid an infinite loop
  redirect("/dashboard"); // Replace "/dashboard" with your desired route
}
