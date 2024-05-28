import Spinner from './spinner/Spinner'

export default function SuspenseMain() {
  return (
    <Spinner.Container width="100%" height="100vh" background="rgb(0, 128, 128)">
      <Spinner.Icon size={100} />
    </Spinner.Container>
  )
}
