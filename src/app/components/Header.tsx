"use client";

import SolanaAuth from "@/app/components/SolanaAuth";

export default function Header() {
  return (
    <header className="p-4 bg-black text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">SolSnype</h1>
      <SolanaAuth />
    </header>
  );
}