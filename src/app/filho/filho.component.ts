import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html'
})
export class FilhoComponent implements OnInit {
  nome = 'Diego';
  sobrenome = 'Nunes Reis';
  irmaos = ['Joao', 'Maria', 'Joaquina'];

  constructor() { }

  ngOnInit(): void {
  }
}
