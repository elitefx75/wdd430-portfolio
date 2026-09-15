import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-6 text-center">
        <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg overflow-hidden max-w-sm">
          <Image
            src="/nature.svg" // place your image in public/
            alt="Nature logo"
            width={400}
            height={250}
            className="w-full h-auto object-cover"
            priority
          />
          <div className="p-4 text-center">
            <h1 className="text-xl font-bold text-[var(--color-brand)]">
              Tailwind CSS Practice
            </h1>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Tailwind CSS helps you build modern, responsive designs using
              utility classes for speed and flexibility.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
