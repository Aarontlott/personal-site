import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

const byOrder = (a: Project, b: Project) =>
  a.data.order - b.data.order || a.data.title.localeCompare(b.data.title);

/** All published projects, sorted by `order`. */
export async function getProjects() {
  const all = await getCollection('projects', ({ data }) => !data.draft);
  return all.sort(byOrder);
}

export const isWorkbench = (p: Project) =>
  p.data.status === 'in-progress' || p.data.status === 'unfinished';
