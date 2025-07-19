import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Landing Page</h1>
      <Card />

      <div className="space-y-4">
        <Button title="Small - Rounded-sm" className="text-sm py-1 px-3 rounded-sm bg-blue-500 text-white" />
        <Button title="Medium - Rounded-md" className="text-base py-2 px-4 rounded-md bg-green-500 text-white" />
        <Button title="Large - Rounded-full" className="text-lg py-3 px-6 rounded-full bg-red-500 text-white" />
        <Button title="Custom - Rounded-lg" className="text-base py-2 px-5 rounded-lg bg-purple-500 text-white" />
      </div>
    </div>
  );
};

export default Landing;
