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
  
  // Replace cyan with teal
  content = content.replace(/cyan-/g, 'teal-');
  
  // Replace drop-shadow rgb values
  content = content.replace(/34,211,238/g, '45,212,191');
  
  fs.writeFileSync(file, content);
});

console.log("Changed cyan to teal");
