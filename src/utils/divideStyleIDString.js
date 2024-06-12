/*eslint-disable */

export default function divideStyleIDString(styles, styleID = '') {
  const stringArr = styleID.split(' ') // 공백 기준으로 나눔
  const result = stringArr.map((v, i) => {
    return styles[v] // 클래스 이름은 styles.클래스명 이런식으로 되기 때문
  })
  return result.join(' ')
}