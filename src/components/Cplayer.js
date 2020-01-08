import React, {Component} from "react"

class Cplayer extends Component {
  constructor() {
    super()
    this.myRef = React.createRef()
    this.state = {
      video: "videos/1.mp4",
      video2: "",
      show: "true",
      show2: "false"
    }
  }

  handleEnd () {
    let i = Math.floor(Math.random()*21)
    this.setState({video: "videos/"+i+".mp4"})
  }

  handleEnd2 () {
    let i = Math.floor(Math.random()*21)
  }

  render() {
    return (
      <>
          <video
            controls={false}
            autoPlay
            src={this.video}
            onEnded={this.handleEnd}
          />
      </>
    )
  }
}

export default Cplayer
