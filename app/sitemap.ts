import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
export default function sitemap(): MetadataRoute.Sitemap { const base=process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'; return [{url:base,lastModified:new Date()},{url:`${base}/#work`,lastModified:new Date()},...projects.map(p=>({url:`${base}/work/${p.slug}`,lastModified:new Date()}))]; }
