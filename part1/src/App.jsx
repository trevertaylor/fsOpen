
const Header = (props) =>{
  return(
    <h1>{props.course.name}</h1>
  )
}
const Part = (props) =>{
  return(
    <div>
        <p>{props.parts.name} {props.parts.exercises}</p>
    </div>
  )
}

const Content = (props) =>{
  console.log(props)
  return(
    <>
      <Part parts={props.parts[0]} />
      <Part parts={props.parts[1]} />
      <Part parts={props.parts[2]} />
    </>
  )
}

const Total = (props) =>{
  return(
    <p>Number of Exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}

const App = () => {
  const course = {
    name: "Half Stack Application Development",
    parts: [
      {
      name: 'Fundamentals of React',
      exercises: 10,
      },
      {
      name: 'Using props to pass data',
      exercises: 7,
      },
      {
      name: 'Fundamentals of React',
      exercises: 14,
      }

    ]
  }
  return(
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}
export default App