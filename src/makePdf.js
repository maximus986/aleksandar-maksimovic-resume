const markdownPdf = require('markdown-pdf');
const path = require('path');

try {
  const resumePath = path.resolve(__dirname, './resume.mdx');
  const pdfPath = path.resolve(__dirname, './AleksandarMaksimovicResume.pdf');

  markdownPdf({ phantomPath: '/usr/local/bin/phantomjs' })
    .from(resumePath)
    .to(pdfPath, () => {
      console.log('Done');
    });
} catch (error) {
  console.log(error);
}
