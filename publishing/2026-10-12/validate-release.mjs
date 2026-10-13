import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';

const root=path.resolve(import.meta.dirname,'../..'), date='2026-10-12';
const manifest=JSON.parse(fs.readFileSync(path.join(import.meta.dirname,'manifest.json'),'utf8'));
const load=(file,name)=>JSON.parse(fs.readFileSync(path.join(root,file),'utf8').match(new RegExp(`export const ${name}[^=]*= ([\\s\\S]*);\\n?$`))[1]);
const blogs=load('lib/october12-blog.ts','october12BlogPosts'), research=load('lib/october12-research.ts','october12ResearchPosts');
const errors=[]; const ok=(v,m)=>{if(!v) errors.push(m)};
ok(blogs.length===12,'expected exactly 12 Blog items'); ok(research.length===5,'expected exactly 5 Research items');
ok(manifest.blog.length===12&&manifest.research.length===5,'manifest counts');
const all=[...blogs,...research]; const titles=new Set(), slugs=new Set(), hashes=new Set();
for(const item of all){
  ok(item.publishedAt===date,`${item.slug}: wrong date`); ok(!item.title.includes(date)&&!/\b2026\b/.test(item.title),`${item.slug}: date in title`);
  ok(!titles.has(item.title),`${item.slug}: duplicate title`); titles.add(item.title); ok(!slugs.has(item.slug),`${item.slug}: duplicate slug`); slugs.add(item.slug);
  const expected=`/thumbnails/october-12/${item.slug}.webp`; ok(item.thumbnail===expected,`${item.slug}: thumbnail registry mismatch`);
  const file=path.join(root,'public',expected); ok(fs.existsSync(file),`${item.slug}: missing thumbnail`);
  if(fs.existsSync(file)){const dims=execFileSync('sips',['-g','pixelWidth','-g','pixelHeight',file],{encoding:'utf8'});ok(dims.includes('pixelWidth: 1200')&&dims.includes('pixelHeight: 630'),`${item.slug}: wrong dimensions`);const hash=crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');ok(!hashes.has(hash),`${item.slug}: duplicate thumbnail`);hashes.add(hash)}
}
for(const item of blogs){ok(Array.isArray(item.sections)&&item.sections.length>=8,`${item.slug}: shallow Blog`);ok(item.sections.flatMap(x=>x.paragraphs).join(' ').split(/\s+/).length>=550,`${item.slug}: Blog under 550 words`)}
for(const item of research){ok(Array.isArray(item.sources)&&item.sources.length===10,`${item.slug}: needs exactly 10 sources`);ok(new Set(item.sources.map(s=>s.url)).size===10,`${item.slug}: sources not unique`);ok(item.sources.every(s=>/^https:\/\//.test(s.url)),`${item.slug}: sources must be HTTPS`);ok(item.sections.length>=12,`${item.slug}: shallow Research`);ok(item.sections.flatMap(x=>x.paragraphs).join(' ').split(/\s+/).length>=750,`${item.slug}: Research under 750 words`);ok(item.methodology&&item.faq?.length>=3,`${item.slug}: missing methodology or FAQ`)}
const paras=[];for(const item of all)for(const section of item.sections||[])for(const p of section.paragraphs||[]){if(p.split(/\s+/).length>=18){const norm=p.toLowerCase().replace(/[^a-z0-9 ]/g,'').replace(/\s+/g,' ').trim();ok(!paras.includes(norm),`${item.slug}: duplicate substantive paragraph`);paras.push(norm)}}
const blogIndex=fs.readFileSync(path.join(root,'app/blog/page.tsx'),'utf8'), researchIndex=fs.readFileSync(path.join(root,'app/research/page.tsx'),'utf8'), blogDetail=fs.readFileSync(path.join(root,'app/blog/[slug]/page.tsx'),'utf8'), researchDetail=fs.readFileSync(path.join(root,'app/research/[slug]/page.tsx'),'utf8'), content=fs.readFileSync(path.join(root,'lib/content.ts'),'utf8');
ok(content.includes('october12BlogPosts')&&content.includes('october12ResearchPosts'),'separate registries not wired');ok(blogIndex.includes('Published')&&researchIndex.includes('Published'),'visible index dates missing');ok(blogDetail.includes('Published')&&researchDetail.includes('Published'),'visible detail dates missing');ok(blogDetail.includes('Related')&&researchDetail.includes('Related'),'related content missing');ok(blogDetail.includes('<aside')&&researchDetail.includes('<aside'),'sidebars missing');ok(blogDetail!==researchDetail,'Blog and Research detail systems must remain distinct');
if(errors.length){console.error(errors.map(x=>`ERROR: ${x}`).join('\n'));process.exit(1)}console.log(`PASS: ${blogs.length} Blog, ${research.length} Research, ${hashes.size} unique exact-title thumbnails; source depth, routes, visible dates, sidebars, related content, and duplicate prose verified.`);
