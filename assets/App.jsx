import { useState } from 'react'
import './styles.css'

const colors = {
  colors: [
{
  name: 'Aqua',
  value: 'rgb(0, 255, 255)',
  id: crypto.randomUUID()
},
{
  name: 'Black',
  value: 'rgb(0, 0, 0)',
  id: crypto.randomUUID()
},
{
  name: 'Black Garment Leather',
  value: 'rgb(42, 42, 42)',
  id: crypto.randomUUID()
},
{
  name: 'Brown',
  value: 'rgb(72, 29, 0)',
  id: crypto.randomUUID()
},
{
  name: 'Buckskin',
  value: 'rgb(133, 57, 6)',
  id: crypto.randomUUID()
},
{
  name: 'Forest Green',
  value: 'rgb(42, 63, 50)',
  id: crypto.randomUUID()
},
{
  name: 'Fuchsia',
  value: 'rgb(199, 9, 180)',
  id: crypto.randomUUID()
},
{
  name: 'Gray',
  value: 'rgb(99, 98, 97)',
  id: crypto.randomUUID()
},
{
  name: 'Lavender',
  value: 'rgb(177, 126, 180)',
  id: crypto.randomUUID()
},
{
  name: 'Light Gray',
  value: 'rgb(182, 182, 182)',
  id: crypto.randomUUID()
},
{
  name: 'Lime Green',
  value: 'rgb(79, 208, 72)',
  id: crypto.randomUUID()
},
{
  name: 'Olive Drab',
  value: 'rgb(76, 96, 75)',
  id: crypto.randomUUID()
},
{
  name: 'Maroon',
  value: 'rgb(64, 4, 29)',
  id: crypto.randomUUID()
},
{
  name: 'Navy',
  value: 'rgb(14, 8, 102)',
  id: crypto.randomUUID()
},
{
  name: 'Orange',
  value: 'rgb(199, 95, 3)',
  id: crypto.randomUUID()
},
{
  name: 'Peach',
  value: 'rgb(225, 174, 156)',
  id: crypto.randomUUID()
},
{
  name: 'Pink',
  value: 'rgb(227, 149, 211)',
  id: crypto.randomUUID()
},
{
  name: 'Purple',
  value: 'rgb(70, 38, 64)',
  id: crypto.randomUUID()
},
{
  name: 'Red',
  value: 'rgb(211 13 13)',
  id: crypto.randomUUID()
},
{
  name: 'Royal Blue',
  value: 'rgb(16 54 111)',
  id: crypto.randomUUID()
},
{
  name: 'Rust',
  value: 'rgb(124 32 4)',
  id: crypto.randomUUID()
},
{
  name: 'Sand/Gold',
  value: 'rgb(220 208 149)',
  id: crypto.randomUUID()
},
{
  name: 'Turqoise',
  value: 'rgb(18 144 167)',
  id: crypto.randomUUID()
},
{
  name: 'Yellow',
  value: 'rgb(206 206 84)',
  id: crypto.randomUUID()
},
{
  name: 'White Suede',
  value: 'rgb(249 249 249)',
  id: crypto.randomUUID()
},
{
  name: 'White Garment Leather',
  value: 'rgb(203 203 203)',
  id: crypto.randomUUID()
}]}

const fonts = {
  fonts: [{
    name: 'Block',
    style: 'Blockletter',
    id: crypto.randomUUID()
  },
  {
    name: 'Old English',
    style: 'Old English Five',
    id: crypto.randomUUID()
  },
  {
    name: 'Script',
    style: 'Bible Script Com',
    id: crypto.randomUUID()
  },
  {
    name: 'Varsity',
    style: "Varsity Regular",
    id: crypto.randomUUID()
  }
    


]}

const stitch = []

for (let i = 0; i < 50; i++) {
  stitch.push(i)
}

function App() {



  const [showColor, setShowColor] = useState(false) //show color menu
  const [showText, setShowText] = useState(false)  //show text menu
  const [showExtra, setShowExtra] = useState(false) //show extra menu
  const [showTextColor, setShowTextColor] = useState(false) //show text color ddl
  const [showFont, setShowFont] = useState(false) //show font ddl
  const [showStitch, setShowStitch] = useState(false)
  
  
  const [newColor, setNewColor] = useState('') //change color of belt
  const [text, setText] = useState('')  //change text of belt
  const [textColor, setTextColor] = useState('') //change color of belt text
  const [textColorName, setTextColorName] = useState('') //set name of color in text color ddl
  const [fontName, setFontName] = useState('')
  const [font, setFont] = useState('verdana')
  const [stitchColor, setStitchColor] = useState('') //set color of stitch
  const [stitchColorName, setStitchColorName] = useState('') //set name of stitch color in ddl

  const textColorStyle = {
    color: textColor
  }

  const fontStyle = {
    fontFamily: font
  }

  const stitchStyle = {
    color: stitchColor
  }

  const textChange = (event) => {
    let text = event.target.value
    if (font == 'Varsity Regular') {
      console.log('varsity')
      text = text.toUpperCase()
    }
    setText(text)
  }
  

  function changeBeltColor(e, c) {
    console.log(e.target)
    setNewColor(c)
  }

  function handleTextColor(value, name) {
    setShowTextColor(!showTextColor)
    setTextColor(value)
    setTextColorName(name)
  }
  
  // const toggle = () => setShowMenu(!showMenu)
  
  function handleFontChange(name, style) {
    setFont(style)
    setShowFont(!showFont)
    setFontName(name)
    console.log(style)
  }

  function handleStitchChange(value, name) {
    setShowStitch(!showStitch)
    setStitchColor(value)
    setStitchColorName(name)
  }



  // console.log(colors)
  return (
    <>
      <h1>Satchmo's Powerlifting Belts</h1>
      <div className='desWrap'>
          <h2>10MM THICK - LEVER POWER LIFTING BELT</h2>
      </div>
      <section className='beltContainer' style={{background: newColor}}>
      <div className='upperStitch'>
          {stitch.map(stitch => {
            return (
              <p style={{...stitchStyle}} key={crypto.randomUUID()}>─</p>
            )
          })}
          </div>
        <div className='belt'>
          <h2 style={{...textColorStyle, ...fontStyle}}>{text}</h2>
        </div>
        <div className='lowerStitch'>
          {stitch.map(stitch => {
            return (
              <p style={{...stitchStyle}} key={crypto.randomUUID()}>─</p>
            )
          })}
          </div>
      </section>
      <section className='main'>
        <div className='beltColor dropMenu'>
          <div className='sectionTitle' onClick={() => setShowColor(!showColor)}>
            <h2>CHOOSE A BELT COLOR</h2>
            <h2 className='ddlArrow'>{showColor ? '▲' : '▼'}</h2>
          </div>
          <div className={'interior ' + (showColor ? 'show' : 'hide')}>
            <div className='box'>
              <h3>OUTSIDE SUEDE COLOR</h3>
              <h4>What color suede would you like on the outside of your belt?</h4>
                <div className='colorContainer'>
              {colors.colors.map(color => {
                return (
                  <>
                <div className='colorHolder'>
                  <div className='color' key={color.id} onClick={(e) => changeBeltColor(e, color.value)} style={{background: color.value}}></div>
                  <h3>{color.name}</h3>
                </div>
                </>
                )
              })}
              </div>
            </div>
          </div>
        </div>
        
        <div className='textColor dropMenu'>
        <div className='sectionTitle' onClick={() => setShowText(!showText)}>
            <h2>CHOOSE YOUR TEXT</h2>
            <h2 className='ddlArrow'>{showText ? '▲' : '▼'}</h2>
          </div>
          <div className={'interior ' + (showText ? 'show' : 'hide')}>

            <div className='box'>
              <h3>EMBROIDERED OUTSIDE MESSAGE</h3>
              <h4>What message would you like to include? (20 character limit)</h4>
              <input type='text' value={text} maxLength={20} onChange={textChange}></input>
            </div>
            <div className='box'>
              <h3>EMBROIDERED TEXT FONT</h3>
              <h4>Please select a font</h4>
              <p className='ddlColor picked' onClick={() => setShowFont(!showFont)}>{fontName == '' ? 'Choose a font' : fontName}</p>
              <div className={'colorDDL ' + (showFont ? 'show' : 'hide')}>
               {fonts.fonts.map(font => {
                return (
                  <>
                  <p className='ddlColor' onClick={() => handleFontChange(font.name, font.style)} style={{fontFamily: font.style}}>{font.name}</p>
                  </>
                )
               })}
              </div>
            </div>
            <div className='box'>
              <h3>EMBROIDERED TEXT COLOR</h3>
              <h4>Please choose a color for your message</h4>
                <p className='ddlColor picked' onClick={() => setShowTextColor(!showTextColor)}><span className='smColor' style={{background: textColor}}></span>{textColorName == '' ? 'Choose a color' : textColorName}</p>
                <div className={'colorDDL ' + (showTextColor ? 'show' : 'hide')}>
                {colors.colors.map(color => {
                  return (
                    <>
                      <p className='ddlColor' onClick={() => handleTextColor(color.value, color.name)}><span className='smColor' style={{background: color.value}}></span>{color.name}</p>
                    </>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <div className='finalTouch dropMenu'>
          <div className='sectionTitle' onClick={() => setShowExtra(!showExtra)}>
              <h2>FINAL TOUCHES</h2>
              <h2 className='ddlArrow'>{showExtra ? '▲' : '▼'}</h2>
            </div>
            <div className={'interior ' + (showExtra ? 'show' : 'hide')}>
              <div className='box'>
                <h3>STITCH COLOR</h3>
                <h4>Please select a color for your belt stitching</h4>
                <p className='ddlColor picked' onClick={() => setShowStitch(!showStitch)}><span className='smColor' style={{background: stitchColor}}></span>{stitchColorName == '' ? 'Choose a stitch color' : stitchColorName}</p>
                <div className={'colorDDL ' + (showStitch ? 'show' : 'hide')}>
                {colors.colors.map(color => {
                  return (
                    <>
                    <p className='ddlColor' onClick={() => handleStitchChange(color.value, color.name)}><span className='smColor' style={{background: color.value}}></span>{color.name}</p>
                    </>
                  )
                })}
                </div>
              </div>
            </div>
        </div>
      </section>
 
    </>
  )
}

export default App
