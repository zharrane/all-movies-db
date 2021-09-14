import React from "react"
import { PersonImage, Content, Wrapper } from "./Person.style"
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config"

const Person = ({ persons = [] }) => {
  console.log(persons)
  return (
    <Wrapper>
      <ul>
        {persons.map((person) => {
          return (
            <Content>
              <PersonImage
                key={person.id}
                src={IMAGE_BASE_URL + BACKDROP_SIZE + person.profile_path}
                alt="movie-staff"
              />
              <p className="original-name" key={person.id + 2021}>
                {person.original_name}
              </p>

              <p key={person.id + 2023}> {person.character}</p>
            </Content>
          )
        })}
      </ul>
    </Wrapper>
  )
}

export default Person
