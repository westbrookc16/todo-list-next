"use client";
import { useAuth } from "@clerk/clerk-react";
import { SignInButton, SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
export default function NavBar() {
  const { isSignedIn } = useAuth();
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>{isSignedIn ? <SignOutButton /> : <SignInButton />}</li>
      </ul>
    </nav>
  );
}
