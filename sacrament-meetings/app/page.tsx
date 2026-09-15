import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="landing-shell">
      <div className="grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
        <div className="landing-copy">
          <p className="eyebrow">Cedar Ridge Ward</p>
          <h1>A quiet place to gather.</h1>
          <p className="landing-intro">
            Find this week&apos;s sacrament meeting agenda, speakers, hymns, and
            announcements in one simple place.
          </p>
          <Link className="primary-button" href="/meetings">
            View meeting agendas <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>
        <Image
          className="h-auto w-full rounded-sm object-cover shadow-xl"
          src="/meeting-house.svg"
          alt="A warm meeting house beneath a quiet evening sky"
          width={640}
          height={480}
          priority
        />
      </div>
    </main>
  );
}
