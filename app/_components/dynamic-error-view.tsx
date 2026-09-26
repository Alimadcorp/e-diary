export default function DynamicErrorView({ statusCode, message }: { statusCode: number; message?: string }) {
  const things = ["http.cat", "http.cat", "http.pizza", "http.dog", "httpcats.com", "httpgoats.com", "httpducks.com", "http.garden", "http.fish"];
  const a = things[Math.floor(things.length * Math.random())];
  return (
    <div className="bg-black w-full min-h-screen flex items-center justify-center p-4">
      <img 
        className="w-full h-auto max-w-full max-h-[90vh] object-contain select-none" 
        src={`https://${a}/${statusCode}.jpg`}
        alt={`HTTP ${statusCode}: ${message}`}
      />
    </div>
  );
}
