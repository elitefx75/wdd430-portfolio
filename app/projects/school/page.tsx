export default async function SchoolProjects() {
  // Fetch school projects from your API
  const res = await fetch("http://localhost:3000/api/projects?type=school", {
    cache: "no-store", // ensures fresh data each request
  });
  const projects = await res.json();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">School Projects</h1>
      <ul className="space-y-2">
        {projects.map((p: any) => (
          <li key={p.id} className="border-b pb-2">
            {p.name}
          </li>
        ))}
      </ul>
    </main>
  );
}
