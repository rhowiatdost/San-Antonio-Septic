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
  
  // Replace ALL teal with cyan to ensure uniform "aqua" color
  content = content.replace(/teal-/g, 'cyan-');
  content = content.replace(/bg-cyan-900\/50 border-cyan-900\/50/g, 'bg-cyan-900/30 border-cyan-900/50'); // fix previously slightly wrong replace if any
  
  // Revert buttons
  content = content.replace(/bg-white text-slate-950 hover:bg-slate-200/g, 'bg-cyan-500 text-slate-950');
  content = content.replace(/bg-white text-slate-950 hover:bg-slate-100/g, 'bg-cyan-500 text-slate-950');
  content = content.replace(/bg-white text-slate-950/g, 'bg-cyan-500 text-slate-950');
  
  content = content.replace(/hover:bg-slate-200 hover:bg-slate-200/g, 'hover:bg-cyan-400');
  content = content.replace(/hover:bg-slate-200/g, 'hover:bg-cyan-400');
  content = content.replace(/hover:bg-slate-100/g, 'hover:bg-cyan-400');
  
  // Revert drop shadows
  content = content.replace(/drop-shadow-\[0_0_15px_rgba\(255,255,255,0\.3\)\]/g, 'drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]');
  content = content.replace(/drop-shadow-\[0_0_10px_rgba\(255,255,255,0\.2\)\]/g, 'drop-shadow-[0_0_10px_rgba(34,211,238,0.2)]');
  content = content.replace(/drop-shadow-\[0_0_5px_rgba\(255,255,255,0\.3\)\]/g, 'drop-shadow-[0_0_5px_rgba(34,211,238,0.3)]');
  
  // Borders
  content = content.replace(/border-white\/10/g, 'border-cyan-500/20');
  content = content.replace(/border-white\/40/g, 'border-cyan-500/40');

  // Specific reverts from the scripts
  content = content.replace(/<Droplet className="([^"]*) text-white"/g, '<Droplet className="$1 text-cyan-400"');
  content = content.replace(/hover:text-white/g, 'hover:text-cyan-400');
  
  content = content.replace(/text-white\/90 flex-shrink-0/g, 'text-cyan-400 flex-shrink-0');
  content = content.replace(/text-white uppercase/g, 'text-cyan-400 uppercase');
  content = content.replace(/<([^ ]+) className="([^"]*) text-white"/g, '<$1 className="$2 text-cyan-400"'); // Catches service.icon, step.icon, ShieldCheck, Wrench, Clock, Phone, Mail etc
  
  // Pages specific
  content = content.replace(/text-white font-bold drop-shadow/g, 'text-cyan-400 font-bold drop-shadow');
  content = content.replace(/text-white mb-6 drop-shadow/g, 'text-cyan-500 mb-6 drop-shadow');
  content = content.replace(/text-white\/90"/g, 'text-cyan-500"');
  
  content = content.replace(/text-white flex-shrink-0/g, 'text-cyan-500 flex-shrink-0');
  content = content.replace(/text-white mx-auto/g, 'text-cyan-500 mx-auto');
  content = content.replace(/text-white px-4 border-cyan-500\/40/g, 'text-cyan-400 px-4 border-cyan-500/40');
  content = content.replace(/text-white"\>\$\{plan\.pumpingCredit\}/g, 'text-cyan-400">${plan.pumpingCredit}');
  content = content.replace(/text-white drop-shadow/g, 'text-cyan-500 drop-shadow');
  
  content = content.replace(/group-hover:text-white drop-shadow/g, 'group-hover:text-cyan-400 drop-shadow');

  fs.writeFileSync(file, content);
});

console.log("Reverted white to aqua (cyan)");
