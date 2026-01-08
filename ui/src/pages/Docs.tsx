import { GSCard } from "@/components/GS-Card";

export default function Docs() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Documentation</h1>
      <GSCard title="Getting Started">
        <p className="text-gray-300">
          Welcome to the Ghost Sentinel documentation. Here you will find all the information you need to get started with the platform.
        </p>
      </GSCard>

        <GSCard title="API Reference" className="mt-8">
            <p className="text-gray-300">
                Our API allows you to integrate Ghost Sentinel with your existing tools and workflows. 
                Explore the endpoints and data models available.
            </p>
        </GSCard>
    </div>
  );
}