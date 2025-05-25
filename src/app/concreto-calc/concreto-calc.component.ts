import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-concreto-calc',
  imports: [CommonModule, FormsModule],
  templateUrl: './concreto-calc.component.html',
  styleUrl: './concreto-calc.component.scss'
})
export class ConcretoCalcComponent {
  volume = 1;
  cimento = 350;
  areia = 900;
  brita = 1200;
  agua = 180;

  resultado: string | null = null;

  calcular() {
    if (
      this.volume <= 0 ||
      this.cimento <= 0 ||
      this.areia <= 0 ||
      this.brita <= 0 ||
      this.agua < 0
    ) {
      this.resultado = null;
      return;
    }

    const cimentoTotal = this.volume * this.cimento;
    const areiaTotal = this.volume * this.areia;
    const britaTotal = this.volume * this.brita;
    const aguaTotal = this.volume * this.agua;

    this.resultado = `
Resultado para ${this.volume} m³:

Cimento: ${cimentoTotal.toFixed(2)} kg
Areia: ${areiaTotal.toFixed(2)} kg
Brita: ${britaTotal.toFixed(2)} kg
Água: ${aguaTotal.toFixed(2)} litros
    `;
  }

  limpar() {
    this.resultado = null;
  }
}
