
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-10 flex flex-col gap-6">
      <h1 className="text-xl font-extralight">Landing Page</h1>

      <Card />

      <div className="space-y-4">
        {/* Small buttons */}
        <div className="flex gap-4">
          <Button title="Small Rounded-sm" className="text-sm rounded-sm" />
          <Button title="Small Rounded-md" className="text-sm rounded-md" />
          <Button title="Small Rounded-full" className="text-sm rounded-full" />
        </div>

        {/* Medium buttons */}
        <div className="flex gap-4">
          <Button title="Medium Rounded-sm" className="text-base rounded-sm" />
          <Button title="Medium Rounded-md" className="text-base rounded-md" />
          <Button title="Medium Rounded-full" className="text-base rounded-full" />
        </div>

        {/* Large buttons */}
        <div className="flex gap-4">
          <Button title="Large Rounded-sm" className="text-lg rounded-sm" />
          <Button title="Large Rounded-md" className="text-lg rounded-md" />
          <Button title="Large Rounded-full" className="text-lg rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
