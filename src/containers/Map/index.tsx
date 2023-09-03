import styled from '@emotion/styled'
import { useParams } from '@tanstack/react-router'

export const Map: React.FC = () => {
  const { mapId } = useParams({ strict: false })

  return <Iframe src={`https://dynmap.thearkose.com/${mapId}/`} />
}

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`
