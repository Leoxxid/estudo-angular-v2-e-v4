import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = "http://loiane.training";
  urlImagem = "http://lorempixel.com/400/200/nature/"
  valorAtual: string = '';
  cursoAngular: boolean = true;
  valorSalvo: string ;
  isMouseOver: boolean = false;
  nomeDoCurso: string = 'Angular';

  getValor(){
  return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert("Botão Clicado")
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = ((<HTMLInputElement>evento.target).value);
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit() {
  }

}
