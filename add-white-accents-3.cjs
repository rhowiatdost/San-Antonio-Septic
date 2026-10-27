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
  
  // Specific checks for pages
  if (file.includes('Residential.tsx')) {
    content = content.replace(/text-teal-400 font-bold/g, 'text-white font-bold drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]');
  }

  if (file.includes('Commercial.tsx')) {
    content = content.replace(/text-teal-500 mb-6/g, 'text-white mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]');
    content = content.replace(/text-teal-500"/g, 'text-white/90"');
  }

  if (file.includes('MaintenancePlans.tsx')) {
    content = content.replace(/text-teal-500 flex-shrink-0/g, 'text-white flex-shrink-0');
    content = content.replace(/text-teal-500 mx-auto/g, 'text-white mx-auto');
    content = content.replace(/text-teal-400 px-4/g, 'text-white px-4 border-white/40');
    content = content.replace(/text-teal-400"\>\$\{plan\.pumpingCredit\}/g, 'text-white">${plan.pumpingCredit}');
    content = content.replace(/text-teal-500"\>\$\{plan\.pumpingCredit\}/g, 'text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">${plan.pumpingCredit}');
  }
  
  if (file.includes('ServiceAreas.tsx')) {
    content = content.replace(/group-hover:text-teal-400/g, 'group-hover:text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]');
  }

  fs.writeFileSync(file, content);
});

console.log("White accents round 3 added");
