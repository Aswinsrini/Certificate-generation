import{ useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Certificate from './Certificate';



const Printable = () => {
  const componentRef = useRef(null);


  const handlePrint = () => {
    html2canvas(componentRef.current).then(canvas =>{
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 10, 10,190,0);
        // const pdf = new jsPDF('l','mm',[210,297])
        pdf.save('my_certificate.pdf')
    })
  }

  return (
    <div>
      <Certificate ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};

export default Printable;
