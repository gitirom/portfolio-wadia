import fs from 'fs';
import path from 'path';

const urls = [
    'https://gitirom.github.io/portfolio-wadia/',
    'https://gitirom.github.io/portfolio-wadia/#about',
    'https://gitirom.github.io/portfolio-wadia/#skills',
    'https://gitirom.github.io/portfolio-wadia/#services',
    'https://gitirom.github.io/portfolio-wadia/#qualification',
    'https://gitirom.github.io/portfolio-wadia/#work',
    'https://gitirom.github.io/portfolio-wadia/#testimonials',
    'https://gitirom.github.io/portfolio-wadia/#contact',
];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map(url => `
    <url>
        <loc>${url}</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <priority>0.8</priority>
    </url>`).join('')}
</urlset>`;

const publicPath = path.resolve('./public');

if (!fs.existsSync(publicPath)){
    fs.mkdirSync(publicPath);
}

fs.writeFileSync(path.join(publicPath, 'sitemap.xml'), sitemapContent, 'utf8');
console.log('Sitemap generated successfully');
