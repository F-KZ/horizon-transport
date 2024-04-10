

const PDF= "http://horizon-transport.fr/Programme.pdf"

 const Programme = () => {

  const downloadFiles = (url) => {
    const link = document.createElement('a')
    const fileName = url.split('/').pop()

   // link.download = "image.png"
    link.href = url
    link.setAttribute('download', fileName)
    link.click()
  }
  
  

  return (
    <div>
      <p onClick={() => {downloadFiles(PDF)}} className='cursor-pointer' >Programme VTC</p>
    </div>
  );
};

export default Programme