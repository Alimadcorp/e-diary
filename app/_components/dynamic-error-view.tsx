export default function DynamicErrorView({ statusCode }: { statusCode: number; message?: string }) {
  return (
    <div className="bg-black w-full min-h-screen flex items-center justify-center p-4">
      <img 
        className="w-full h-auto max-w-full max-h-[90vh] object-contain select-none" 
        src={`https://http.cat/${statusCode}.jpg`}
        alt={`HTTP ${statusCode}`}
      />
    </div>
  );
}
