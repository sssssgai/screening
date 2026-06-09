const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertJpegToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);
    console.log(`✓ Converted: ${inputPath} -> ${outputPath}`);
  } catch (error) {
    console.error(`✗ Error converting ${inputPath}:`, error.message);
  }
}

async function main() {
  const homeDir = path.join(__dirname, '..', 'public', 'images', 'home');
  const contactDir = path.join(__dirname, '..', 'public', 'images', 'contact');
  
  // Convert home images
  const homeImages = fs.readdirSync(homeDir).filter(img => img.endsWith('.jpeg') || img.endsWith('.jpg'));
  for (const image of homeImages) {
    const inputPath = path.join(homeDir, image);
    const outputPath = path.join(homeDir, image.replace(/\.jpeg|\.jpg$/, '.webp'));
    await convertJpegToWebP(inputPath, outputPath);
    // Remove original file
    fs.unlinkSync(inputPath);
    console.log(`✓ Removed original: ${inputPath}`);
  }
  
  // Convert contact images
  const contactImages = fs.readdirSync(contactDir).filter(img => img.endsWith('.jpeg') || img.endsWith('.jpg'));
  for (const image of contactImages) {
    const inputPath = path.join(contactDir, image);
    const outputPath = path.join(contactDir, image.replace(/\.jpeg|\.jpg$/, '.webp'));
    await convertJpegToWebP(inputPath, outputPath);
    // Remove original file
    fs.unlinkSync(inputPath);
    console.log(`✓ Removed original: ${inputPath}`);
  }
  
  console.log('\n✓ All images converted to WebP format!');
}

main();
