import errorImg from 'asset/images/error.png'

export default function getThumnailImg(htmlString) {
  const parser = new DOMParser()
  const doc = parser.parseFromString(htmlString, 'text/html')
  const firstImage = doc.querySelector('img')
  return firstImage ? firstImage.src : errorImg
}
