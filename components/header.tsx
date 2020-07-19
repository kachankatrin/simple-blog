import styled from "styled-components";
const MainHeader = styled.header`
  padding: 5rem;
  text-align: center;
  
  letter-spacing: 5px;
  margin: auto;
  width: fit-content;
  >div {
  > h1 {
    text-transform: uppercase;
    width: fit-content;
    border-left: 0.2rem solid black;
    padding: 1rem;
    border-right: 0.2rem solid black;
    margin: -1rem auto;
  }
  >p {
      font-size: 1rem;
      text-align: center;
      line-height: 1;
      width: fit-content;
      margin: auto;
  }
}
`;
const Header: React.FC = (): JSX.Element => {
  return (
    <MainHeader>
        <div>
      <h1>Simple Blog</h1>
      <p>Create your own simple blog</p>
      </div>
    </MainHeader>
  );
};

export default Header;
