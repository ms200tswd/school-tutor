export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <h1 className="text-4xl font-bold">Welcome to biology learning system</h1>
      <div className="mt-8">
        <a 
          href="/anatomy" 
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Start Learning →
        </a>
      </div>
    </main>
  );
}