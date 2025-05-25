import { Component } from '@angular/core';
import { TracoCalcComponent } from './traco-calc/traco-calc.component';
import { CommonModule } from '@angular/common';
import { ConcretoCalcComponent } from './concreto-calc/concreto-calc.component';
import { ArgamassaCalcComponent } from './argamassa-calc/argamassa-calc.component';

@Component({
  selector: 'app-root',
  imports: [ TracoCalcComponent, ConcretoCalcComponent, ArgamassaCalcComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'civil-calc';

  calculadoraAberta: string | null = null;

  abrirCalculadora(tipo: string) {
    this.calculadoraAberta = tipo;
  }

  fecharModal() {
    this.calculadoraAberta = null;
  }
}
