import { getProjects } from './lib/projects-db';

export const dynamic = 'force-dynamic';

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Projects Overview</h1>
      <ul className="space-y-2">
        {projects.map((p) => (
          <li key={p.id} className="border-b pb-2">
            {p.title} ({p.type})
          </li>
        ))}
      </ul>
    </main>
  );
}
