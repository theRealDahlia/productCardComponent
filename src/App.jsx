import { CardTypeOne } from './components/CardTypeOne'
import { CardTypeTwo } from './components/CardTypeTwo'
import { CardTypeThree } from './components/CardTypeThree'

function App() {
  // All product displays must be the same size
  // Images must not look like they were stretched, resize instead
  // Each product display must have a price, and at least one button (more info, buy now, add to cart, etc...)

  return (
    <div className="flex flex-inline gap-3 mx-55 my-20">
      <CardTypeOne />
      <CardTypeTwo />
      <CardTypeThree />
    </div>
  )
}


export default App