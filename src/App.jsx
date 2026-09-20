import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
          Your Resume. Smarter Matches.
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
          AI-powered job matching that helps you discover opportunities
          based on your skills, experience, and career goals.
        </p>
      </main>
    </div>
  );
}

export default App;