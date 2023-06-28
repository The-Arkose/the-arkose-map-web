import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import { useState } from 'react'

import { Empty } from './components/Empty'
import { MapHeader } from './containers/Header'
import { MapSelector } from './containers/MapSelector'

export const App = () => {
  const [mapId, setMapId] = useState<string | null>(null)

  return (
    <>
      <Global
        styles={css`
          body {
            font-family: 'Rajdhani', Microsoft JhengHei, sans-serif;
            width: 100%;
            height: 100%;
          }

          html {
            width: 100%;
            height: 100%;
          }

          #app {
            width: 100%;
            height: 100%;
          }

          a {
            color: #222222;
            text-decoration: none;
            transition: all 0.5s;
          }

          a:hover {
            color: #bdbdbd;
            text-decoration: none;
          }

          div {
            transition: all 0.5s;
          }

          img {
            transition: all 0.5s;
          }
        `}
      />
      <Container>
        <MapHeader />
        <Content>
          <MapSelector setMapId={setMapId} />
          {mapId ? (
            <Iframe src={`https://dynmap.thearkose.com/${mapId}/`} />
          ) : (
            <Empty />
          )}
        </Content>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`

const Content = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`
