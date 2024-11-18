
const downloadFiles = (url) => {
  const link = document.createElement('a')
  const fileName = url.split('/').pop()

 // link.download = "image.png"
  link.href = url
  link.setAttribute('download', fileName)
  link.click()
}

export default downloadFiles;
