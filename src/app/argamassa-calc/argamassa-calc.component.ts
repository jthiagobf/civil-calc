import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-argamassa-calc',
  imports: [CommonModule, FormsModule],
  templateUrl: './argamassa-calc.component.html',
  styleUrl: './argamassa-calc.component.scss'
})
export class ArgamassaCalcComponent {
  volume = 1;
  cimento = 300;
  areia = 900;
  agua = 150;

  resultado: string | null = null;

  calcular() {
    if (this.volume <= 0 || this.cimento <= 0 || this.areia <= 0 || this.agua < 0) {
      this.resultado = null;
      return;
    }

    const cimentoTotal = this.volume * this.cimento;
    const areiaTotal = this.volume * this.areia;
    const aguaTotal = this.volume * this.agua;

    this.resultado = `
      Resultado para ${this.volume} m³:

      Cimento: ${cimentoTotal.toFixed(2)} kg
      Areia: ${areiaTotal.toFixed(2)} kg
      Água: ${aguaTotal.toFixed(2)} litros
    `;
  }

  limpar() {
    this.resultado = null;
  }
}
