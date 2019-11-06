import React from 'react'
import RightSidebarContainer from '../video_show/right_sidebar_container';
import GreetingContainer from '../greeting/greeting_container'

class VideoShow extends React.Component {
    constructor(props) {
        super(props);
    
    }

    componentDidMount(){
        const videoId = this.props.match.params.videoId
        this.props.fetchVideo(videoId).then(response => {
            this.props.fetchUser(response.video[videoId].creatorId)})
    }

    componentDidUpdate(prevProps){
        if (prevProps.match.params.videoId !== this.props.match.params.videoId ){
            this.props.fetchVideo(this.props.match.params.videoId).then(response => {
                this.props.fetchUser(response.video[this.props.match.params.videoId].creatorId)
            })
        }
    }

    renderVideo(video){
        return (
            <video key={video.videoUrl} width="520" height="400" controls autoPlay className='video'>
                <source src={video.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        )
    }

    render() {
      const video = this.props.video
      if(!video){
          return null
      }
      return (
        <>
          <div className="nav">
              <GreetingContainer />
          </div>
          <>
          <section className="show-form">
              <div className="video-show">

                  {this.renderVideo(video)}
              
                  <div className="title">{video.title}
                    <div className="video-show-cont">
                      <p className="views-show"># views</p>
                      <p className="date">{video.created_at}</p> 
                    </div>
                  </div>
                  <section className='content'>
                      <div className="creator">{this.props.creator.first_name} {this.props.creator.last_name}</div>
                      <div className="description">{video.description}</div>

                  </section>

              </div>

              <div className='rightsidebar'>
                  <h2 className='up-next'>Up next</h2>
                  <RightSidebarContainer />
              </div>
              <br/>
          </section>
        </>
      </>
    )
  }
}

export default VideoShow
