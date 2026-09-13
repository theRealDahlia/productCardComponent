function App() {

  return (

    // All product displays must be the same size
    // Images must not look like they were stretched, resize instead
    // Each product display must have a price, and at least one button (more info, buy now, add to cart, etc...)


    <div className="app">

      {/* Classic card style, image display on top with buttons and text content in seperate container on bottom */}
      <div className="productCardV1">

        <div className="imageSection"></div>

      </div>

      {/* Display Image, when mouse hover on image display text (more info, buy now, etc...) */}
      <div className="productCardV2">

        <div></div>

      </div>

      {/* Idk Yet */}
      <div className="productCardV3">

        <div></div>

      </div>

    </div>
  )
}


export default App