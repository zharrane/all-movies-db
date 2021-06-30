import styled from "styled-components"

const PersonImage = styled.img`
  width: 130px;
  max-width: 150px;
  height: 180px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  animation: animateThumb 0.5s;
  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
const Content = styled.div`
  .original-name {
    font-weight: bold;
  }
  p {
    color: var(--medGrey);
  }
  margin-left: 10px;
  margin-right: 4px;
  border: 1px solid #1c1c1c12;
  border-radius: 8px;
  height: 300px;
`
const Wrapper = styled.div`
  overflow-x: scroll;
  width: 100%;
  max-width: var(--maxWdith);
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: grey;
    border-radius: 10px;
  }
`

export { PersonImage, Content, Wrapper }
