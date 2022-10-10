import React from 'react'
import Portada from '../assets/portada.jpg'
import Perfil from '../assets/perfil.png'
import '../style/Card.css'


function Card() {
  return (
<div class="card mb-3">
  <img src={Portada} class="card-img-top" alt="..." />
  <div class="card-body">
    <img src={Perfil} class="card-image-perfil" alt="..."/>
    <h4 class="card-text">Kitty Allanson</h4>
    <p class="card-text"><small class="text-muted">UI/UX</small></p>
  </div>
</div>
  )
}

export default Card