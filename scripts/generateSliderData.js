import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directoryPath = path.resolve(__dirname, '../public/assets/images/badgeslider');
const outputPath = path.resolve(directoryPath, 'metadata.json');

const generateBadgeSliderMetadata = () => {
  const fileNames = fs.readdirSync(directoryPath);

  const metadata = fileNames
    .filter((fileName) => /\.(png|jpe?g|svg)$/i.test(fileName)) // Only include image files
    .map((fileName, index) => ({
      index: index + 1, // Assign an index starting from 1
      name: fileName.replace(/\.[^/.]+$/, ''), // Remove file extension
      path: `assets/images/badgeslider/${fileName}`, // Relative path to the image
    }));

  fs.writeFileSync(outputPath, JSON.stringify(metadata, null, 2));
  console.log('Badge slider metadata generated successfully:', outputPath);
};

generateBadgeSliderMetadata();
