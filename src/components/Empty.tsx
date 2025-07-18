import styled from "@emotion/styled";

export const Empty: React.FC = () => (
  <MessageWrapper>
    <Message>
      <i className="fas fa-arrow-left" /> 請選擇地圖
    </Message>
  </MessageWrapper>
);

const MessageWrapper = styled.div`
  background-color: #272727;
  width: 100%;
  height: 100%;
`;

const Message = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  color: #dbd5af;
`;
