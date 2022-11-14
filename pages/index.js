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
        <Favorites favorites={config.favorites} />
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

const StyledFavorites = styled.div`
  padding: 0 16px 8px 16px;
  margin-left: 16px;

  h2 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  .favorites-list {
    display: flex;
    gap: 16px;

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      width: 140px;

      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
    }
  }  
`

function Favorites(props) {
  const favorites = props.favorites
  return (
    <StyledFavorites>
      <h2>Aluratubes Favoritos</h2>
      <div className="favorites-list">
        {favorites.map(favorite => {
          return (
            <a href={`https://github.com/${favorite}`}>
              <img src={`https://github.com/${favorite}.png`} />
              <span>
                @{favorite}
              </span>
            </a>
          )
        })}
      </div>
    </StyledFavorites>
  )
}
