export default async function ProjectsPage() {
  const res = await fetch("http://localhost:3000/api/projects?type=opensource", {
    cache: "no-store",
  });
  const projects = await res.json();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Projects Overview</h1>
      <ul className="space-y-2">
        {projects.map((p: any) => (
          <li key={p.id} className="border-b pb-2">
            {p.name} ({p.type})
          </li>
        ))}
      </ul>
    </main>
  );
}
