import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import matter from 'gray-matter';
import { marked } from 'marked';
import path from 'path';

// Turns content/**/*.md files into JS modules exporting { frontmatter, html },
// replacing Gatsby's gatsby-transformer-remark + GraphQL data layer.
const markdown = () => ({
  name: 'markdown',
  enforce: 'pre',
  transform(code, id) {
    if (!id.endsWith('.md')) {
      return null;
    }
    const { data, content } = matter(code);
    const html = marked.parse(content);
    return {
      code: `export const frontmatter = ${JSON.stringify(data)};\nexport const html = ${JSON.stringify(html)};`,
      map: null,
    };
  },
});

export default defineConfig({
  base: '/portfolio/',
  publicDir: 'static',
  plugins: [react(), markdown()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@config': path.resolve(__dirname, 'src/config'),
      '@content': path.resolve(__dirname, 'src/content'),
      '@fonts': path.resolve(__dirname, 'src/fonts'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@images': path.resolve(__dirname, 'src/images'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        archive: path.resolve(__dirname, 'archive/index.html'),
        notFound: path.resolve(__dirname, '404.html'),
      },
    },
  },
});
