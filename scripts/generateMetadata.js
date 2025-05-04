import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration for directories to process
const directories = [
  {
    name: 'Blog',
    inputPath: '../src/content/Blog',
    outputPath: '../src/content/Blog/metadata.json',
    processData: (data, content) => {
      // Parse and format the date for blog posts
      const parseDate = (dateString) => {
        const formats = [
          /^\d{4}-\d{2}-\d{2}$/, // yyyy-MM-dd
          /^\d{2}-\d{2}-\d{4}$/, // MM-dd-yyyy
          /^\d{1,2}-\d{1,2}-\d{2}$/, // M-d-yy
        ];

        let date;

        for (const format of formats) {
          if (format.test(dateString)) {
            const parts = dateString.split('-');
            if (format === formats[0]) {
              date = new Date(parts[0], parts[1] - 1, parts[2]);
            } else if (format === formats[1]) {
              date = new Date(parts[2], parts[0] - 1, parts[1]);
            } else if (format === formats[2]) {
              const year = parseInt(parts[2], 10) + (parts[2].length === 2 ? 2000 : 0);
              date = new Date(year, parts[0] - 1, parts[1]);
            }
            break;
          }
        }
        return date && !isNaN(date) ? date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Invalid Date';
      };

      return {
        ...data,
        date: parseDate(data.date), // Format the date
        content,
      };
    },
  },
  {
    name: 'Team',
    inputPath: '../src/content/Team',
    outputPath: '../src/content/Team/metadata.json',
    processData: (data, content) => ({
      ...data,
      content,
    }),
  },
  {
    name: 'Locations',
    inputPath: '../src/content/Locations',
    outputPath: '../src/content/Locations/metadata.json',
    processData: (data, content) => ({
      ...data,
      description: content.trim(),
    }),
  },
  {
    name: 'Home',
    inputPath: '../src/content/Home',
    outputPath: '../src/content/Home/metadata.json',
    processData: (data, content) => ({
      ...data,
      content,
    }),
  },
  {
    name: 'Contact',
    inputPath: '../src/content/Contact',
    outputPath: '../src/content/Contact/metadata.json',
    processData: (data, content) => ({
      ...data,
      content,
    }),
  },
  {
    name: 'Portfolio',
    inputPath: '../src/content/Portfolio',
    outputPath: '../src/content/Portfolio/metadata.json',
    processData: (data, content) => ({
      ...data,
      content,
    }),
  },
];

// Function to generate metadata for a single directory
const generateMetadata = ({ name, inputPath, outputPath, processData }) => {
  const directoryPath = path.resolve(__dirname, inputPath);
  const fileNames = fs.readdirSync(directoryPath);

  const metadata = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const filePath = path.join(directoryPath, fileName);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);

      return {
        slug: fileName.replace('.md', ''), // Use the file name (without extension) as the slug
        ...processData(data, content), // Process data using the provided function
      };
    });

  const outputFilePath = path.resolve(__dirname, outputPath);
  fs.writeFileSync(outputFilePath, JSON.stringify(metadata, null, 2));
  console.log(`${name} metadata generated successfully: ${outputFilePath}`);
};

// Process all directories
directories.forEach(generateMetadata);
