const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..', 'app');

const fileMapping = {
  'layout.tsx': 'og-home.webp',
  'page.tsx': 'og-home.webp',
  'about-us/page.tsx': 'og-home.webp',
  'menu/page.tsx': 'og-home.webp',
  'locations/page.tsx': 'og-locations.webp',
  'takeout/page.tsx': 'og-takeout.webp',
  'delivery/page.tsx': 'og-delivery.webp',
  'catering/page.tsx': 'og-catering.webp',
  'gift-card-deals/page.tsx': 'og-gift-cards.webp',
  'happy-hour/page.tsx': 'og-happy-hour.webp',
  'specials-and-deals/page.tsx': 'og-specials.webp',
  'nutrition/page.tsx': 'og-nutrition.webp',
  'careers/page.tsx': 'og-careers.webp',
  'contact-us/page.tsx': 'og-contact-us.webp',
  'operating-hours/page.tsx': 'og-operating-hours.webp',
  'sitemap/page.tsx': 'og-sitemap.webp',
  'terms-and-conditions/page.tsx': 'og-legal.webp',
  'privacy-policy/page.tsx': 'og-legal.webp',
  'disclaimer/page.tsx': 'og-legal.webp',
  'cookies/page.tsx': 'og-legal.webp',
  'blog/page.tsx': 'og-blog-secret-menu.webp'
};

function processStaticMetadata(filePath, imageFile) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  if (content.includes('openGraph:') && content.includes(imageFile)) {
    return;
  }

  // Find export const metadata...
  const metadataRegex = /export const metadata:\s*Metadata\s*=\s*{([\s\S]*?)};/g;
  
  content = content.replace(metadataRegex, (match, innerContent) => {
    if (innerContent.includes('openGraph:')) return match;
    
    // Clean up trailing comma from innerContent if exists
    let cleanedInner = innerContent.replace(/\s*$/, '').replace(/,$/, '');

    const ogData = `
  openGraph: {
    siteName: "Applebee's Menu Information",
    images: [
      {
        url: '/og/${imageFile}',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og/${imageFile}'],
  }`;

    return `export const metadata: Metadata = {${cleanedInner},${ogData}\n};`;
  });

  fs.writeFileSync(filePath, content);
  console.log(`Updated static metadata in ${filePath}`);
}

function processDynamicMetadata(filePath, defaultImage, isMenu) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  if (content.includes('openGraph:')) {
    return;
  }

  const returnRegex = /return\s*{([\s\S]*?)alternates:\s*{([\s\S]*?)canonical:\s*`([^`]+)`([\s\S]*?)}([\s\S]*?)};/;
  
  content = content.replace(returnRegex, (match, preAlt, altInner1, canonical, altInner2, postAlt) => {
    
    let imageLogic = isMenu 
      ? `const ogImage = fs.existsSync(path.join(process.cwd(), 'public', 'og', \`og-menu-\${p.slug}.webp\`)) ? \`/og/og-menu-\${p.slug}.webp\` : '/og/og-home.webp';`
      : `const ogImage = '/og/${defaultImage}';`;
      
    // Clean up trailing comma from postAlt
    let cleanedPost = postAlt.replace(/\s*$/, '').replace(/,$/, '');

    const ogData = `
    openGraph: {
      siteName: "Applebee's Menu Information",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      images: [ogImage],
    }`;

    return `${imageLogic}\n\n  return {${preAlt}alternates: {${altInner1}canonical: \`${canonical}\`${altInner2}}${cleanedPost},${ogData}\n  };`;
  });

  fs.writeFileSync(filePath, content);
  console.log(`Updated dynamic metadata in ${filePath}`);
}

for (const [relPath, imageFile] of Object.entries(fileMapping)) {
  const fullPath = path.join(appDir, ...relPath.split('/'));
  if (fs.existsSync(fullPath)) {
    processStaticMetadata(fullPath, imageFile);
  }
}

const menuSlugPath = path.join(appDir, 'menu', '[slug]', 'page.tsx');
if (fs.existsSync(menuSlugPath)) {
  processDynamicMetadata(menuSlugPath, 'og-home.webp', true);
}

const blogSlugPath = path.join(appDir, 'blog', '[slug]', 'page.tsx');
if (fs.existsSync(blogSlugPath)) {
  // It already had opengraph, so this won't do anything, which is correct
  processDynamicMetadata(blogSlugPath, 'og-blog-secret-menu.webp', false);
}

console.log("Done!");
