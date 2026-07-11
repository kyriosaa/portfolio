// Build-time markdown data layer, replacing Gatsby's GraphQL + gatsby-transformer-remark.
// The markdown plugin in vite.config.js compiles each .md file into { frontmatter, html }.

const toEntries = modules =>
  Object.values(modules).map(({ frontmatter, html }) => ({ frontmatter, html }));

const byDateDesc = (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date);

export const jobs = toEntries(import.meta.glob('../content/jobs/*/index.md', { eager: true })).sort(
  byDateDesc,
);

export const projects = toEntries(
  import.meta.glob('../content/projects/*.md', { eager: true }),
).sort(byDateDesc);

// Featured projects use a numeric `date` ('1', '2', ...) as their display order,
// and reference their cover image relative to the markdown file.
const featuredModules = import.meta.glob('../content/featured/*/index.md', { eager: true });
const featuredCovers = import.meta.glob('../content/featured/*/*.{jpg,JPG,jpeg,png}', {
  eager: true,
  query: '?url',
  import: 'default',
});

export const featured = Object.entries(featuredModules)
  .map(([file, { frontmatter, html }]) => {
    const dir = file.slice(0, file.lastIndexOf('/') + 1);
    const cover = frontmatter.cover
      ? featuredCovers[dir + frontmatter.cover.replace(/^\.\//, '')]
      : null;
    return { frontmatter, html, cover };
  })
  .sort((a, b) => Number(a.frontmatter.date) - Number(b.frontmatter.date));
