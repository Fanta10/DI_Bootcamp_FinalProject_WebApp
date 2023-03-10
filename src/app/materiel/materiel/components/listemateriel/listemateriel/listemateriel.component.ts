import { FonctionmaterielService } from './../../../services/fonctionmateriel.service';
import { Component, OnInit } from '@angular/core';
import { Materiel } from '../../../models/materiel';

@Component({
  selector: 'app-listemateriel',
  templateUrl: './listemateriel.component.html',
  styleUrls: ['./listemateriel.component.css']
})
export class ListematerielComponent implements OnInit{
  materiels: Materiel[] = [];

  constructor(private functionService : FonctionmaterielService){}

  ngOnInit(): void {



  }
  getAllMateriel(){
    this.functionService.getMateriels().subscribe((response : any) => {
      this.materiels = response;
      console.log(this.materiels);

  });
}

}
