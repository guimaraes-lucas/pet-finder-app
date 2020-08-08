import { Component, OnInit } from '@angular/core';

const PETS: Array<any> = [
  { id: 1, name: 'Bob 1' },
  { id: 2, name: 'Bob 2' },
  { id: 3, name: 'Bob 3' },
  { id: 4, name: 'Bob 4' },
  { id: 5, name: 'Bob 5' },
  { id: 6, name: 'Bob 6' },
  { id: 7, name: 'Bob 7' }
];

@Component({
  selector: 'pets',
  templateUrl: './pets.component.html'
})

export class PetsComponent implements OnInit{
  public pets;

  public constructor(){ // serve para injeção de dependencias
    this.pets = ''
  }

  public ngOnInit(){ // tarefas pesadas de inicialização, como requisição http
    this.pets = PETS;
  }  
}