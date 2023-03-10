import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Materiel } from '../models/materiel';

@Injectable({
  providedIn: 'root'
})
export class FonctionmaterielService {

  constructor(private httpservice : HttpService) { }

  setMateriel(materiel : any) {
    return this.httpservice.post({endpoint : 'api/materiels',data : materiel});
   }

   updateMateriel(materiel : Materiel) {
     return this.httpservice.put({endpoint : 'api/materiels',data : materiel});
   }

   getMateriels() {
    return this.httpservice.get("api/materiels");
   }

   deleteMateriel(id : string) {
     return this.httpservice.delete(`api/materiels/${id}`);
   }
}
