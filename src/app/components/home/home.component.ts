import {Component, inject, OnInit} from '@angular/core';
import {ProductsService} from "@services/products.service";
import {ResponseProducts} from "@interfaces/products.interface";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  private _productsService = inject(ProductsService);
  form: FormGroup;

  products: ResponseProducts[] = [];

  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      games: new FormArray([
        new FormControl('Elemento 1', [Validators.required]),
        new FormControl('Elemento 2', [Validators.required]),
      ])
    })
  }

  ngOnInit() {
    this.loadProducts();

  }

  loadProducts(){
    this._productsService.getProducts().subscribe({
      next: (resp: ResponseProducts[])=>{
        console.log(resp)
      },
      error: (error: any)=>{
        console.log(error);
      }
    })
  }

  onSave(){
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }

    console.log(this.form.value);
    console.log(this.games);
  }

  adToGame( value: string ) {
    const newGame: string = this.form.controls[value].value;
    this.games.push(new FormControl(newGame, Validators.required));
    this.form.controls[value].reset();
  }

  isControlValid( controlName: string){
    return this.form.controls[controlName].errors && this.form.controls[controlName].touched;
  }

  isControlValidInFormArray(formArray: FormArray, index: number){
    return formArray.controls[index].errors && formArray.controls[index].touched;
  }

  get games(){
    return this.form.get('games') as FormArray;
  }

}
