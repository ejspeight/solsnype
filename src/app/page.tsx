"use client"

import { useAuth } from "./components/AuthContext";
import Header from "@/app/components/Header";
import SideNav from "@/app/components/SideNav";
import Footer from "@/app/components/Footer";

export default function Home() {
  const {isSignedIn} = useAuth();

  console.log("Is signed in?", isSignedIn);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex flex-1">
        {isSignedIn && <SideNav />}
        

        <main className="flex-1 p-8">
          {isSignedIn ? (
            <div>
              <h2 className="text-2xl font-bold">Dashboard</h2>
              <p>Welcome to your SolSnype Dashboard!</p>
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-bold">Welcome</h2>
              <p>Sign in with your Solana wallet to access the dashboard.</p>
            </div>
          )}
        </main>
      </div>
      
      <Footer />
    </div>
  );
}
