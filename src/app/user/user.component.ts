import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  nombre: string = '';
  sexo: string = '';
  altura: number = 176;
  peso: number = 84;
  texto: string = "";
  @Output() messageEvent = new EventEmitter<string>();

  test: number = 0;
  resultado: number = 0;

  sumarAlt() {
    this.altura = this.altura + 1;
  }

  restarAlt() {
    if (this.altura <= 0) {
      this.altura = 0;
    } else {
      this.altura = this.altura - 1;
    }
  }

  sumarPeso() {
    this.peso = this.peso + 1;
  }

  restarPeso() {
    if (this.peso <= 0) {
      this.peso = 0;
    }
    else {
      this.peso = this.peso - 1;
    }

  }

  confirmar() {
    this.test = 0;
    if (!this.nombre) {
      alert("Tienes que añadir algun nombre");
      this.test = 1;
    }
    if (!this.sexo) {
      alert("Tienes seleccionar algun sexo");
      this.test = 1;
    }
    if ((this.altura == 0) || (this.peso <= 1)) {
      alert("La altura o el peso estan a valor cero");
      this.test = 1;
    }
    if (this.test == 0) {
      this.calculateIMC(this.peso, (this.altura / 100), this.sexo);
    }
  }

  calculateIMC(pesoIMC: number, alturaIMC: number, sexo: string) {
    this.resultado = pesoIMC / (alturaIMC * alturaIMC);
    if (sexo == "Mujer") {
      if (18.5 >= this.resultado) {
        this.texto = "Tiene peso insuficiente: " + parseFloat((this.resultado).toString()).toFixed(2);
        this.messageEvent.emit(this.nombre + ' ' + this.texto);
      }
      if (this.resultado >= 18.5 && 24.9 >= this.resultado) {
        this.texto = "Estas en tu peso ideal: " + parseFloat((this.resultado).toString()).toFixed(2);
        this.messageEvent.emit(this.nombre + ' ' + this.texto);
      }
      if (this.resultado >= 25.0 && 29.9 >= this.resultado) {
        this.texto = "Tiene sobrepeso: " + parseFloat((this.resultado).toString()).toFixed(2);
        this.messageEvent.emit(this.nombre + ' ' + this.texto);
      }
      if (this.resultado >= 30) {
        this.texto = "Tiene obesidad: " + parseFloat((this.resultado).toString()).toFixed(2);
        this.messageEvent.emit(this.nombre + ' ' + this.texto);
      }
    }
    if (sexo == "Hombre") {
      if (18.5 >= this.resultado) {
        this.texto = "Tiene peso insuficiente: " + parseFloat((this.resultado).toString()).toFixed(2);
        this.messageEvent.emit(this.nombre + ' ' + this.texto);
      }
      if (this.resultado >= 18.5 && 24.9 >= this.resultado) {
        this.texto = "Estas en tu peso ideal: " + parseFloat((this.resultado).toString()).toFixed(2);
        this.messageEvent.emit(this.nombre + ' ' + this.texto);
      }
      if (this.resultado >= 25.0 && 29.9 >= this.resultado) {
        this.texto = "Tiene sobrepeso: " + parseFloat((this.resultado).toString()).toFixed(2);
        this.messageEvent.emit(this.nombre + ' ' + this.texto);
      }
      if (this.resultado >= 30) {
        this.texto = "Tiene Tiene obesidad: " + parseFloat((this.resultado).toString()).toFixed(2);
        this.messageEvent.emit(this.nombre + ' ' + this.texto);
      }
    }


  }

  negar() {
    this.nombre = "";
    this.sexo = "";
    this.altura = 176;
    this.peso = 84;
    this.texto = "";
  }
}
