import { FonctionmaterielService } from './../../services/fonctionmateriel.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/Forms'
import { Materiel } from '../../models/materiel';

@Component({
  selector: 'app-createmateriel',
  templateUrl: './createmateriel.component.html',
  styleUrls: ['./createmateriel.component.css']
})
export class CreatematerielComponent implements OnInit{
  myForm! : FormGroup;
  materiels: Materiel[] = [];


  constructor(private fb:FormBuilder,
    private functionService: FonctionmaterielService){}

  ngOnInit(): void{
    this.myForm = this.fb.group({
      code:['', Validators.required],
      libelle:['', Validators.required, Validators.maxLength(25)],
      serie:['', Validators.required],
      marque:['', Validators.required],
      modele:['', Validators.required],
      entree:['', Validators.required],
      statut:['', Validators.required],
      mise:['', Validators.required],
      mac:['', Validators.required],
      montant:['', Validators.required],
      debgar:['', Validators.required],
      fingar:['', Validators.required],
      duree:['', Validators.required],
      commande:['', Validators.required],
      livraison:['', Validators.required],
      employe:['', Validators.required],
      fourn:['', Validators.required],
    })
    // get liste(){
    //   return this.myForm.get();

    // }

  }

  save(){
    if(this.myForm.invalid){
      alert("Veuillez remplir correctement les champs");
    }else{
      this.functionService.setMateriel(this.myForm);
      console.log(this.myForm.value.code)
    }


  }

}
