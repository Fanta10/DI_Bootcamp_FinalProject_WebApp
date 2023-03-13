import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/Forms';
import { Siteemploye } from '../../models/siteemploye';
import { FonctionsiteemployeService } from '../../services/fonctionsiteemploye.service';

@Component({
  selector: 'app-createemploye',
  templateUrl: './createemploye.component.html',
  styleUrls: ['./createemploye.component.css']
})
export class CreateemployeComponent implements OnInit{

 
siteEmpl : Siteemploye[] = [];
  myFormempl! : FormGroup;
  constructor( private fb : FormBuilder, private site: FonctionsiteemployeService){}


  ngOnInit(){

    this.myFormempl = this.fb.group({
      code:['', Validators.required],
      libelle:['', Validators.required, Validators.maxLength(25)],
      
      site:['', Validators.required]


    });
    // get liste(){
    //   return this.myForm.get();

    // }
   //getSite(){
      this.site.getsiteEmployes().subscribe((response : any) => {
        this.siteEmpl = response;
        console.log(response)

      });
   // }

  }

  save(){
    if(this.myFormempl.invalid){
      alert("Veuillez remplir correctement les champs");
    }else{
      this.site.setSiteEmploye(this.myFormempl.value).subscribe({
        next : data => {
          console.log(data);
          alert("succes")
        },
        error : error => {
          console.log(error)
          alert("error")
        }
      });
      
    }


  }


  }


