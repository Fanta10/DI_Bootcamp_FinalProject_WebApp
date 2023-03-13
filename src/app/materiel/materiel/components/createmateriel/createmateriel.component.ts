import { FonctionmaterielService } from './../../services/fonctionmateriel.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/Forms'
import { Materiel } from '../../models/materiel';
import { StatutMateriel } from '../../models/statut-materiel';
import { TypeMateriel } from '../../models/type-materiel';
import { BonLivraison } from '../../models/bon-livraison';
import { FonctionstatutMaterielService } from '../../services/fonctionstatut-materiel.service';
import { FonctiontypeMaterielService } from '../../services/fonctiontype-materiel.service';
import { FonctionbonLivraisonService } from '../../services/fonctionbon-livraison.service';

@Component({
  selector: 'app-createmateriel',
  templateUrl: './createmateriel.component.html',
  styleUrls: ['./createmateriel.component.css']
})
export class CreatematerielComponent implements OnInit{
  myForm! : FormGroup;
  materiels: Materiel[] = [];
  statutMateriels : StatutMateriel[] = [];
  typeMateriels : TypeMateriel[] = [];
  bonLivraison : BonLivraison[] = [];


  constructor(private fb:FormBuilder,
    private functionService: FonctionmaterielService,
    private statutSercice : FonctionstatutMaterielService,
    private typeService : FonctiontypeMaterielService,
    private bonLivService : FonctionbonLivraisonService
    ){}

  ngOnInit(): void{
    this.myForm = this.fb.group({
      code:['', Validators.required],
      libelle:['', Validators.required],
      serie:['', Validators.required],
      marque:['', Validators.required],
      modele:['', Validators.required],
      entree:['', Validators.required],
      statut:['', Validators.required],
      
      type:['', Validators.required],
      mise:['', Validators.required],
      mac:['', Validators.required],
      montant:['', Validators.required],
      debgar:['', Validators.required],
      fingar:['', Validators.required],
      duree:['', Validators.required],

      livraison:['', Validators.required]


    })
    // get liste(){
    //   return this.myForm.get();

    // }
   // getStatut(){
      this.statutSercice.getStautMateriel().subscribe((response : any) => {
        this.statutMateriels = response;
        console.log(response)

      })

    //}
   // getType(){
      this.typeService.getTypeMateriels().subscribe((data : any) => {
        this.typeMateriels  = data;
        console.log(data)
      });
   // }

    //getBonLivrison(){
      this.bonLivService.getBonLivraison().subscribe((donnees : any) => {
        this.bonLivraison = donnees;
        console.log(donnees)
      })
    //}


  }

  save(){
    if(this.myForm.invalid){
      alert("Veuillez remplir correctement les champs");
    }else{
      this.functionService.setMateriel(this.myForm.value).subscribe({
        next : data => {
          console.log(data);
          alert("succes")
        },
        error : error => {
          console.log(error)
          alert("error")
        }
      });
      console.log(this.myForm.value)
    }


  }




}
