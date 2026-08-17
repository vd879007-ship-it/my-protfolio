import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAFD] px-4 text-center">
      <h1 className="text-6xl font-extrabold text-[#FF6B00] mb-4">404</h1>
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Page Not Found</h2>
      <p className="text-slate-600 mb-6 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF6B00] text-white font-semibold shadow-md hover:bg-[#E05E00] transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
}
