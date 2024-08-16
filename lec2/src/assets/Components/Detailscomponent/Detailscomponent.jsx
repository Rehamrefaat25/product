import './Details.css'
import carticon from '../../../assets/carticon.svg'
function Detailscomponent() {
  return (
    <div id="details">
        <label id="title">PERFUME</label>
        <h1 id="header">Gabrielle Essence Eau De Parfum</h1>
        <p id="para">A floral,solar and voluptuous interpretation composed by olivier palage ,perfumer,creator for the house of chanel</p>
        <div id="price">
            <label id="pricelabel">$149.99</label>
            <label id="discount"><del>$169.99</del></label>
        </div>
        <button id="cart">
            <img src={carticon}></img>
            <span>Add to cart</span>
            </button>
    </div>
  )
}

export default Detailscomponent