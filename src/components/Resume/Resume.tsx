import "./resume.scss";
import { motion } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import Intro from "../shared/Intro";

import ResumePDF from "../../res/resume.pdf";

const Resume: React.FC = () => {
  return (
    <motion.div
      className="page resume"
      initial={{ x: -window.innerWidth }}
      animate={{ x: 0 }}
      exit={{ x: -window.innerWidth }}
      transition={{ bounce: false, ease: "anticipate", duration: 1.2 }}
    >
      <div className="content">
        <Intro title="Resume" sub="My resume. That's it." />
        <div className="section pdf-display">
          <div className="section-content">
            <Document file={ResumePDF} onLoadError={console.error}>
              <Page pageNumber={1} className="pdf" />
            </Document>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
