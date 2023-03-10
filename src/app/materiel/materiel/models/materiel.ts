export interface Materiel {
  id:number,
  code:String,
  libelle:String,
  marque:String,
  modele:String,
  montant:number,
  num_serie:String,
  statut_materiel:String,
  type_materiel:String,
  duree_utilisation:number,
  deb_garantie:Date,
  fin_garantie:Date,
  date_mise_disposition: Date,
  mac_address:String,
  date_enregistrement:Date
}
