import { mkdir, writeFile, access } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// Resolve __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Resolve path to rootDir/src/content/docs from scripts/
const basePath = join(__dirname, "..", "src", "content", "docs");

const guidePages = [
  {
    file: "introduction.mdx",
    title: "Introduction",
    slug: "introduction",
    content: "Welcome to the Hajj Guide!",
  },
  { file: "before-you-go.mdx", title: "Before You Go", slug: "before-you-go" },
  { file: "mindset.mdx", title: "Mindset & Intentions", slug: "mindset" },
  { file: "day-1.mdx", title: "Day 1 - 8th Dhul Hijjah (Mina)", slug: "day-1" },
  { file: "day-2.mdx", title: "Day 2 - Arafah", slug: "day-2" },
  { file: "day-3.mdx", title: "Day 3 - Muzdalifah & Rami", slug: "day-3" },
  { file: "days-4-6.mdx", title: "Days 4–6 - Tashreeq", slug: "days-4-6" },
  { file: "umrah.mdx", title: "Umrah Guide", slug: "umrah" },
  { file: "duas.mdx", title: "Duas & Dhikr", slug: "duas" },
  { file: "faqs.mdx", title: "FAQs & Issues", slug: "faqs" },
  { file: "after.mdx", title: "After Hajj", slug: "after" },
];

const referencePages = [
  { file: "checklists.mdx", title: "Checklists", slug: "checklists" },
];

async function fileExists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function writePage(dir, { file, title, slug, content: mdxContent }) {
  const fullDir = join(basePath, dir);
  const fullPath = join(fullDir, file);

  const content = `---
title: ${title}
---

${mdxContent || "Coming soon!"}
`;

  if (!(await fileExists(fullPath))) {
    await mkdir(fullDir, { recursive: true });
    await writeFile(fullPath, content, "utf8");
    console.log(`✅ Created ${file} in /${dir}`);
  } else {
    console.log(`⚠️  Skipped (already exists): ${file} in /${dir}`);
  }
}

// Generate all pages
for (const page of guidePages) {
  await writePage("guide", page);
}

for (const page of referencePages) {
  await writePage("reference", page);
}
