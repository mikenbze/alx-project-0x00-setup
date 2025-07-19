import React from "react";
import Card from "@/components/Card"; // or "../components/Card" if aliasing isn't set up

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card />
    </main>
  );
}
