import * as C from './styles';
import videoBg from '/assets/video/video_color.mp4'

export const Banner = () => {
  return (
    <C.Container>
      <C.Video src={videoBg} autoPlay loop muted />
      <C.ContentArea>
        <h1>Teste</h1>
        <p>Mais Testes</p>
      </C.ContentArea>
    </C.Container>
  )
}
