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
  
  // Footer & Navbar
  content = content.replace(/<Droplet className="([^"]*) text-teal-400"/g, '<Droplet className="$1 text-white"');
  content = content.replace(/hover:text-teal-400/g, 'hover:text-white');
  
  // CarePlansPreview.tsx
  if (file.includes('CarePlansPreview.tsx')) {
    content = content.replace(/text-teal-400 flex-shrink-0/g, 'text-white/90 flex-shrink-0');
  }

  // ServiceCards.tsx
  if (file.includes('ServiceCards.tsx')) {
    content = content.replace(/text-teal-400 uppercase/g, 'text-white uppercase');
    content = content.replace(/<service.icon className="([^"]*) text-teal-400"/g, '<service.icon className="$1 text-white"');
  }
  
  // LifecycleSection.tsx
  if (file.includes('LifecycleSection.tsx')) {
    content = content.replace(/<step.icon className="([^"]*) text-teal-400"/g, '<step.icon className="$1 text-white"');
  }
  
  // DesignReferral.tsx
  if (file.includes('DesignReferral.tsx')) {
    content = content.replace(/text-teal-400"/g, 'text-white"');
  }

  // Home.tsx
  if (file.includes('Home.tsx')) {
    content = content.replace(/text-teal-400"/g, 'text-white"');
    // For specific shield/clock icons
    content = content.replace(/<ShieldCheck className="([^"]*) text-teal-400"/g, '<ShieldCheck className="$1 text-white"');
    content = content.replace(/<Wrench className="([^"]*) text-teal-400"/g, '<Wrench className="$1 text-white"');
    content = content.replace(/<Clock className="([^"]*) text-teal-400"/g, '<Clock className="$1 text-white"');
  }

  // Contact.tsx
  if (file.includes('Contact.tsx')) {
    content = content.replace(/<Phone className="([^"]*) text-teal-400"/g, '<Phone className="$1 text-white"');
    content = content.replace(/<Mail className="([^"]*) text-teal-400"/g, '<Mail className="$1 text-white"');
  }

  fs.writeFileSync(file, content);
});

console.log("White accents round 2 added");
