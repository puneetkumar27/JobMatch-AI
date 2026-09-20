import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white">
            ✦
          </div>

          <span className="text-xl font-bold text-slate-900">
            JobMatch <span className="text-indigo-600">AI</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="/"
            className="text-sm font-semibold text-indigo-600"
          >
            Home
          </a>

          <a
            href="/jobs"
            className="text-sm font-medium text-slate-600 hover:text-indigo-600"
          >
            Jobs
          </a>

          <a
            href="/about"
            className="text-sm font-medium text-slate-600 hover:text-indigo-600"
          >
            About
          </a>

          <a
            href="/features"
            className="text-sm font-medium text-slate-600 hover:text-indigo-600"
          >
            Features
          </a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/login"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
          >
            Login
          </a>

          <a
            href="/register"
            className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">

            <a
              href="/"
              className="rounded-lg px-3 py-2 text-sm font-semibold text-indigo-600 hover:bg-slate-50"
            >
              Home
            </a>

            <a
              href="/jobs"
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
            >
              Jobs
            </a>

            <a
              href="/about"
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
            >
              About
            </a>

            <a
              href="/features"
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
            >
              Features
            </a>

            <div className="my-2 border-t border-slate-200" />

            <a
              href="/login"
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Login
            </a>

            <a
              href="/register"
              className="rounded-lg bg-indigo-600 px-3 py-2.5 text-center text-sm font-semibold text-white hover:bg-indigo-700"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;