import styled from '@emotion/styled';
import { Link } from '@tanstack/react-router';

type Props = {
  onChangeMap: () => void;
  mapId: string;
  name: string;
  hasDownload?: boolean;
};

export const Item: React.FC<Props> = ({
  onChangeMap,
  mapId,
  name,
  hasDownload = false,
}) => (
  <Wrapper>
    <Name
      search={{}}
      to='/maps/$mapId'
      params={{ mapId }}
      onClick={onChangeMap}
    >
      {name}
    </Name>
    {hasDownload && (
      <Download
        href={`https://archive.thearkose.com/${mapId}.zip`}
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='far fa-file-archive' />
      </Download>
    )}
  </Wrapper>
);

const Wrapper = styled.li`
  background-color: #191919;
  border-bottom: #222222 2px solid;
  white-space: nowrap;
  transition: all 0.5s;
  display: flex;
  line-height: 48px;
`;

const Name = styled(Link)`
  width: 100%;
  padding: 0 16px;
  color: unset;

  &:hover {
    background-color: #272727;
    color: #ffffff;
    cursor: pointer;
  }
` as typeof Link;

const Download = styled.a`
  padding: 0 16px;
  border-left: 2px #292929 solid;
  display: block;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.5s;

  &:hover {
    background-color: #272727;
    color: #ffffff;
    cursor: pointer;
  }
`;
