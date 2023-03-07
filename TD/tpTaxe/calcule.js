function calculeTaxe() {
  let taxe = 0
  let pFinale = 0
  let titre = document.getElementById('titre').value
  let prix = document.getElementById('prix').value
  let quantite = document.getElementById('quantite').value
  let pTotale = prix * quantite

  //alert(`produit: ${titre} and prix: ${prix} and quantite: ${quantite}`);
  console.log(`produit: ${titre} and prix: ${prix} and quantite: ${quantite}`)

  if (pTotale < 200) {
    taxe = pTotale * 0.07
  } else if (pTotale < 500) {
    taxe = pTotale * 0.12
  } else taxe = pTotale * 0.15
  pFinale = pTotale + taxe
  alert(`le produit ${titre} est de prix initiale ${pTotale} est la taxe serai: ${taxe} avec un prix finale: ${pFinale}`)
}
