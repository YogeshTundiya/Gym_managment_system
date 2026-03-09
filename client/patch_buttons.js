const fs = require('fs');

function getFiles(dir, files = []) {
  const list = fs.readdirSync(dir);
  for (let file of list) {
    const name = dir + '/' + file;
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else if (name.endsWith('.tsx') && !name.includes('layout.tsx')) {
      files.push(name);
    }
  }
  return files;
}

const files = getFiles('/home/yogesh/Documents/myproject/gym_managment_system/client/src/app/(dashboard)');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    if (content.includes('"use client"') || content.includes("'use client'")) {
        const buttonRegex = /<button(?![^>]*onClick)[^>]*>/g;
        
        if (buttonRegex.test(content)) {
            let newContent = content.replace(buttonRegex, (match) => {
                return match.replace(/<button/, '<button onClick={(e) => { e.preventDefault(); openModal("Action Triggered", "This feature is currently under active development and will be available soon."); }}');
            });

            if (!newContent.includes('useActionModal')) {
                newContent = newContent.replace(/"use client";\s*/, '"use client";\nimport { useActionModal } from "@/components/providers/ActionModalProvider";\n');
                
                const functionMatch = newContent.match(/export default function\s+\w+\s*\([^)]*\)\s*\{/);
                if (functionMatch) {
                    const insertPos = functionMatch.index + functionMatch[0].length;
                    newContent = newContent.slice(0, insertPos) + '\n    const { openModal } = useActionModal();' + newContent.slice(insertPos);
                }
            }
            
            fs.writeFileSync(file, newContent);
            console.log("Patched", file);
        }
    }
});
