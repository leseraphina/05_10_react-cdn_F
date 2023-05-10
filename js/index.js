(
  function (){
// ProPic
    function ProPic({color}){
      return (
        <img src={`./images/${color}.jpg`} alt={color} />
      )
    }
    // 03 - 13
// ProSize
function ProSize({size,sizes,color,colors,changeSize}){
function optionSize(){
  // const sizes = window.data.allSize;
  // console.log(sizes)
  return sizes.map((item,index) =>(<option value={item} key={index}>{item}</option>))
}

function sizeChange(e){
  return changeSize(e.target.value)
}

  return (
    <p>
      <label htmlFor="size">Size</label>
      <select 
      id="size"
      defaultValue={size}
      onChange={sizeChange}
      >
        {optionSize()}
      </select>
    </p>
  )
}
// ProColor
function ProColor({size,sizes,color,colors,changeColor}){
  function optionColor(){
    // const colors = window.data.allColor;
    // console.log(colors)
    return colors.map((item,index) => (<option value={item} key={index}>{item}</option>))
  }
  function colorChange(e){
    return changeColor(e.target.value)
  }
  return (
    <p>
      <label htmlFor="color">Color</label>
      <select 
        id="color"
        defaultValue={color}
        onChange={colorChange}
        >
      {optionColor()}
      </select>
    </p>
  )
}



// app
function App(){
  const [size,setSize] = React.useState(10);
  const [sizes,setSizes] = React.useState(window.data.allSize);
   
  const [color,setColor] = React.useState('green');
  const [colors,setColors] = React.useState(window.data.allColor);

function changeColor(selectColor){
  setColor(selectColor)
}
function changeSize(selectSize){
  setSize(selectSize)
}
  return (
   <div className="custom">
    <div className="pic">
      <ProPic
       color={color} />
    </div>
    <div className="selector">
    <ProColor 
      size={size}
      sizes={sizes}
      color={color}
      colors={colors}
      changeColor={changeColor}
    />
    <ProSize
          size={size}
          sizes={sizes}
          color={color}
          colors={colors}
          changeSize={changeSize} />
    </div>

   </div>
  )
}


    // export
    const root = ReactDOM.createRoot(document.querySelector('#root'));
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
  }
)()