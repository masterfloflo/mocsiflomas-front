import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../ModelFolder/Produit';
import { ProduitService } from '../ServiceFolder/produit.service';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styles: []
})
export class ListeProduitsComponent implements OnInit {
  lesProduits:Produit[]

  constructor(private _produitService: ProduitService) {
    this._produitService.listerProduits().then(col=>{this.lesProduits=col, console.log(col)})
    // .subscribe(col=>{this.lesProduits=col,
    //   console.log(col)});
   }

  ngOnInit() {
    
  }

}
