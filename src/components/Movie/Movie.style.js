import styled from "styled-components"

const Wrapper = styled.div`
  border-bottom: 1px solid var(--darkGrey);
  background-position-x: 70%;
  background-position-y: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  position: relative;

  z-index: -1;
  background-image: linear-gradient(
      to right,
      rgba(12.55%, 10.98%, 13.73%, 1) 150px,
      rgba(12.55%, 10.98%, 13.73%, 0.84) 100%
    ),
    url(${({ image }) => image});
  .bg-style {
    position: absolute;
    inset: 0 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`
const Content = styled.div`
  color: var(--white);
  display: flex;
  flex-wrap: nowrap;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 40px;
  padding-right: 40px;
  max-width: var(--maxWdith);
  width: 100%;
`
const Participant = styled.div`
  overflow-x: hidden;
  flex: 3;
`
const Participants = styled.div`
  padding: 10px 20px;
  width: 100%;
  height: 100%;
  width: 100%;
  display: flex;
  max-width: var(--maxWdith);
  h1 {
    color: var(--medGrey);
  }
`

const MovieInfos = styled.div`
  margin: 50px auto;
  color: var(--lightGrey);
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  box-sizing: border-box;
  padding-left: 40px;
  .title-year {
    width: 100%;
    margin-bottom: 24px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .tagline {
    opacity: 0.5;
  }
  ol {
    margin-top: 20px;
    justify-content: flex-start;
    flex-wrap: wrap;
    list-style-type: none;
    list-style-position: inside;
    margin: 0;
    padding: 0;
    display: flex;
    position: relative;
    top: 0;
    left: 0;
  }
  li {
    width: 33%;
    flex-basis: 33%;
    min-width: 140px;
    text-align: left;
    margin-bottom: 14px;
    margin-right: 0;
    box-sizing: border-box;
    padding-right: 20px;
    .director-name {
      font-weight: bold;
      font-size: 1em;
      margin: 0;
      padding: 0;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .director-job {
      font-size: 0.9em;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  .director-card {
    display: flex;
    padding: 10px 10px;
  }
`

const MovieCover = styled.img`
  border-width: 0px;
  min-width: 300px;
  width: 300px;
  height: 450px;
  overflow: hidden;
  border-radius: 8px;
`
export { Participants, Participant, Content, Wrapper, MovieInfos, MovieCover }
