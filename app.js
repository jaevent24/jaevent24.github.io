function downloadPDF() {
    
    const pdfUrl = 'Resume.pdf';
    
    const downloadLink = document.createElement('a');
    
    downloadLink.href = pdfUrl;
    
    downloadLink.download = 'JaevenResume.pdf';
    
    document.body.appendChild(downloadLink);
    
    downloadLink.click();
    
    document.body.removeChild(downloadLink);
  }