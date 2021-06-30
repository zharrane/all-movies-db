import React from "react"
import { PersonImage, Content, Wrapper } from "./Person.style"
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config"
import NO_IMAGE from "../../images/no_image.jpg"

const Person = ({ persons }) => {
  console.log(persons)
  return (
    <Wrapper>
      <ul>
        {persons.map((person) => {
          return (
            <Content to={`/directors/${person.name}`}>
              <PersonImage
                key={person.id}
                src={
                  person.profile_path
                    ? IMAGE_BASE_URL + BACKDROP_SIZE + person.profile_path
                    : NO_IMAGE
                }
                alt="movie-staff"
              />
              <h3 key={person.id + 2021}> {person.name}</h3>
              <div key={person.id + 2022}>
                <p key={person.id + 2023}>{person.popularity}</p>
              </div>
            </Content>
          )
        })}
      </ul>
    </Wrapper>
  )
}

export default Person
