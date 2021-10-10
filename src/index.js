import React from 'react';
import { render } from 'react-dom';
import Resume from './resume.mdx';
import resumePdf from 'url:./AleksandarMaksimovicResume.pdf';

const App = () => {
  return (
    <div>
      <Resume />
      <a download href={resumePdf}>
        Download resume
      </a>
    </div>
  );
};

render(<App />, document.getElementById('app'));
