const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');

async function convertToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);
    console.log(`✓ Converted: ${inputPath} -> ${outputPath}`);
    return true;
  } catch (error) {
    console.error(`✗ Error converting ${inputPath}:`, error.message);
    return false;
  }
}

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      await processDirectory(filePath);
    } else if (stats.isFile()) {
      const ext = path.extname(file).toLowerCase();
      if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
        const webpPath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
        if (!fs.existsSync(webpPath)) {
          await convertToWebP(filePath, webpPath);
        } else {
          console.log(`✓ Already exists: ${webpPath}`);
        }
      }
    }
  }
}

async function main() {
  console.log('Starting WebP conversion...\n');
  await processDirectory(imagesDir);
  console.log('\nConversion completed!');
}

main().catch(console.error);
