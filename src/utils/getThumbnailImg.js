import errorImg from 'asset/images/noImg.webp'

export default function getThumnailImg(htmlString) {
  const parser = new DOMParser()
  const doc = parser.parseFromString(htmlString, 'text/html')
  const firstImage = doc.querySelector('img')
  return firstImage ? firstImage.src : errorImg
}
