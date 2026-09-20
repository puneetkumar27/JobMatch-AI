function Home() {
  return (
    <main className="overflow-hidden bg-slate-50">

      {/* Hero Section */}
      <section className="relative">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">

          {/* Left Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-indigo-600"></span>
              AI-Powered Job Matching
            </div>

            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Your Resume.
              <span className="block text-indigo-600">
                Smarter Matches.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Upload your resume and let AI discover job opportunities
              that match your skills, experience, and career goals.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700">
                Upload Resume
              </button>

              <button className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-600">
                Browse Jobs
              </button>
            </div>

            {/* Small Trust Text */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
              <span>✓ AI-powered matching</span>
              <span>✓ Personalized recommendations</span>
              <span>✓ Free to explore</span>
            </div>
          </div>

          {/* Right AI Matching Card */}
          <div className="relative mx-auto w-full max-w-lg">

            {/* Background decoration */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-200/40 blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-200/40 blur-3xl"></div>

            {/* Main Card */}
            <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/70">

              {/* Card Header */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    AI Match Analysis
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-slate-900">
                    Your Top Match
                  </h2>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-xl">
                  ✦
                </div>
              </div>

              {/* Job */}
              <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-slate-900">
                      Frontend Developer
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      TechNova Solutions
                    </p>
                  </div>

                  <div className="rounded-full bg-green-50 px-3 py-1 text-sm font-bold text-green-600">
                    94% Match
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-slate-600">
                    React
                  </span>
                  <span className="rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-slate-600">
                    JavaScript
                  </span>
                  <span className="rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-slate-600">
                    Tailwind
                  </span>
                </div>
              </div>

              {/* Match Breakdown */}
              <div className="mt-6">
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-medium text-slate-600">
                    Skills match
                  </span>
                  <span className="font-semibold text-slate-900">
                    96%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[96%] rounded-full bg-indigo-600"></div>
                </div>
              </div>

              <div className="mt-4">
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-medium text-slate-600">
                    Experience match
                  </span>
                  <span className="font-semibold text-slate-900">
                    91%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[91%] rounded-full bg-indigo-500"></div>
                </div>
              </div>

              {/* Bottom */}
              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                <div>
                  <p className="text-xs text-slate-400">
                    Recommended because
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-700">
                    8 of your skills match
                  </p>
                </div>

                <span className="text-2xl">→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;