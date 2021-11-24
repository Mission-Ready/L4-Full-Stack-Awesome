import React, {useState} from 'react'

export default function AnimalExample() {
  const [animal , setAnimal] = useState('')
  return (
    <div>
      <div>
      <button onClick={() => setAnimal('cat')}>Cat</button>
      <button onClick={() => setAnimal('dog')}>Dog</button>
      </div>
      {animal === 'cat' && 
      <img 
        className="image"
        src="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d" 
        alt="cat"
      />}
      {animal === 'dog' && 
      <img 
        className="image"
        src="https://scx2.b-cdn.net/gfx/news/hires/2018/2-dog.jpg" 
        alt="dog"
      />}
    </div>
  )
}
