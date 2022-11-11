import config from "../config.json"
import styled from "styled-components"
import { CSSReset } from "../src/components/CSSReset"
import Menu from "../src/components/Menu"
import { StyledTimeline } from "../src/components/Timeline"

function HomePage() {
  return (
    <>
      <CSSReset />
      <div style={{
        display: "flex",
        flexDirection: "column",
        flex: 1
      }}>
        <Menu />
        <Header />
        <Timeline playlists={config.playlists} />
      </div>
    </>
  )
}

export default HomePage

const StyledBanner = styled.div`
  img {
    height: 230px;
    width: 100%;
  }
`
function Banner(props) {
  return (
    <StyledBanner>
      <img src={props.image} />
    </StyledBanner>
  )
}

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`

function Header() {
  return (
    <>
      <Banner image={config.backgroundImage} />
      <StyledHeader>
        <section className="user-info">
          {/* <img src="banner"/> */}
          <img src={`https://github.com/${config.github}.png`} />
          <div>
            <h2>
              {config.name}
            </h2>
            <p>
              {config.description}
            </p>
          </div>
        </section>
      </StyledHeader>
    </>
  )
}

// const StyledTimeline = styled.div`
//   div {
//     display: flex;
//     gap: 16px;
//   }
// `

function Timeline(props) {
  const playlistsNames = Object.keys(props.playlists)
  return (
    <StyledTimeline>
      {
        playlistsNames.map(playlistName => {
          const videos = props.playlists[playlistName]
          return (
            <section>
              <h2>{playlistName}</h2>
              <div>
                {videos.map(video => {
                  return (
                    <a href={video.url}>
                      <img src={video.thumb} />
                      <span>
                        {video.title}
                      </span>
                    </a>
                  )
                })}
              </div>
            </section>
          )
        })
      }
    </StyledTimeline>
  )
}
