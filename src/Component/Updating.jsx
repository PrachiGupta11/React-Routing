function Updating(){
  return(
    <>
       <h1>Updating</h1>
      <ul>
        <li>
        <strong>componentDidUpdate():</strong> This method is invoked immediately after updating occurs. It's a good place to perform side effects such as network requests as long as you compare the current props to the previous props.
        </li>
      </ul>
    </>
  )
}

export default Updating;