import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import "./Clock.css";
const Clock = () => (
  <CountdownCircleTimer
    isPlaying
    duration={5}
    size = {500}
    colors={"green"}
    // colorsTime={[5, 2, 1, 0]}
    // children={size:100}

  >
    {/* {({ remainingTime }) => remainingTime} */}
    {
        ({ remainingTime}) => {
            const minutes = Math.floor(remainingTime / 60)
            const seconds = remainingTime % 60
        
            return `${minutes}:${seconds}`
        }
    }

  </CountdownCircleTimer>
)

export default Clock;