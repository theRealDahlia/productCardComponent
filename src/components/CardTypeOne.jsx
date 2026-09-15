export function CardTypeOne(){

  function addToCart(){
    console.log('Clicked add 2 cart')
  }

  function moreInfo(){
    console.log('Clicked more info.')
  }

    return (
        <div className="h-60 w-40 bg-blue-100 rounded-xl text-center flex flex-col text-black">
          {/* Classic card style, image display on top with buttons and text content in seperate container on bottom */}
        <div className="imageSection">
        </div>

        <div className="w-full h-10 bg-blue-100 rounded-sm mt-auto shadow-[0_-4px_6px_-5px] shadow-black py-2 flex gap-4 justify-center">
          <button className="text-blue-300 text-font-sm text-xs rounded p-1" onClick={moreInfo}> 
            <span className="text-[10px]">More Info...</span>
          </button>
          <button className="bg-purple-400 text-font-sm text-xs rounded p-1 hover:bg-violet-500 transition-colors " onClick={addToCart}>
            <span className="text-[10px]">Add to Cart</span>
          </button>
        </div>

      </div>
    )
}