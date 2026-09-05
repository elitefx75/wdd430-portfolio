import ProjectList from '@/components/ProjectList';
const projects = [
  {
    title: 'TechHire API',
    description: 'A Node.js and Express API designed for managing equipment rentals and job application workflows. Includes endpoints for CRUD operations, schema validation, and deployment on Render.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'REST API'],
    link: 'https://github.com/elitefx75/techhire-api'
  },
  {
    title: 'Movies & Books Platform',
    description: 'A Next.js application that allows users to browse, search, and review movies and books. Features include dynamic routing, Tailwind styling, and integration with external APIs for content.',
    technologies: ['React', 'TypeScript', 'JavaScript'],
    link: 'https://github.com/elitefx75/webproject'
  }
];

export default function Home() { 
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I'm a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}