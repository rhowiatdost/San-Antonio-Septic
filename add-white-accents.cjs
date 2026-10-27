const fs = require('fs');
const path = require('path');

const walk = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
};

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Add white borders to some cards and containers
  content = content.replace(/bg-slate-900 rounded-2xl/g, 'bg-slate-900 rounded-2xl border border-white/10');
  content = content.replace(/bg-slate-800 rounded-2xl/g, 'bg-slate-800 rounded-2xl border border-white/10');
  content = content.replace(/bg-slate-900 p-8 rounded-2xl/g, 'bg-slate-900 p-8 rounded-2xl border border-white/10');
  
  // Update some buttons to white accents
  content = content.replace(/bg-teal-500 text-slate-950/g, 'bg-white text-slate-950 hover:bg-slate-200');
  content = content.replace(/hover:bg-teal-400/g, 'hover:bg-slate-200');
  
  // Add subtle white glow to primary titles
  content = content.replace(/text-4xl md:text-5xl lg:text-7xl font-extrabold text-white/g, 'text-4xl md:text-5xl lg:text-7xl font-extrabold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]');
  content = content.replace(/text-4xl md:text-5xl font-extrabold text-white/g, 'text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]');
  
  fs.writeFileSync(file, content);
});

console.log("White accents added");
