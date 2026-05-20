export default function Home() {
return (
<div style={{
padding:"30px",
fontFamily:"Arial",
textAlign:"center"
}}>

<img
src="/logo.png"
style={{
width:"140px",
borderRadius:"100%"
}}
/>

<h1>Digital Business CI</h1>

<p>
Gagnez de l'argent grâce aux produits digitaux
</p>

<a
href="https://pay.wave.com/m/M_ci_YDLKef8UEhyp/c/ci/?amount=15000"
>
<button>
Payer avec Wave
</button>
</a>

<br/><br/>

<a
href="https://wa.me/2250799539408"
>
<button>
WhatsApp
</button>
</a>

<h2>Inscription</h2>

<form>

<input
placeholder="Nom complet"
/>

<br/><br/>

<input
placeholder="Email"
/>

<br/><br/>

<input
placeholder="WhatsApp"
/>

<br/><br/>

<button>
S'inscrire
</button>

</form>

</div>
)
}
