import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ReactPdf = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function onDocumentLoadError(err) {
    console.log("err", err);
  }

  const changePage = (offset) => {
    if (pageNumber + offset > 0) {
      setPageNumber(pageNumber + offset);
    }
  };

  return (
    <div>
      <Document
        file={require("./test.pdf")}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
      >
        <Page
          loading={<div>is loading...</div>}
          width={400}
          height={600}
          pageNumber={pageNumber}
          pageIndex={20}
        />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <button onClick={() => changePage(-1)}>pre</button>
      <button onClick={() => changePage(1)}>next</button>
    </div>
  );
};

export default ReactPdf;
