import { Injectable } from '@angular/core';
import { BoxDto, PatientAdmissionDto } from './box.models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoxService {

  data: BoxDto[] = [
    {
      id: 1,
      name: "Box A - Cirujano",
      doctor: "Ariel Mamani",
      patient: "Kevin Arenas",
      comments: "Amputar brazo",
      isAvailable: false
    },
    {
      id: 2,
      name: "Box B - Odontologo",
      doctor: "Fiorella Mamani",
      patient: "Javier Huerta",
      comments: "Todo perfecto",
      isAvailable: false
    },
    {
      id: 3,
      name: "Box C - Cardiologo",
      doctor: "Daniel de la fuente",
      patient: "Vander",
      comments: "Hayayay me duele el corazon",
      isAvailable: false
    }
  ];

  constructor() {}

  getAllBoxes(): Observable<BoxDto[]> {
    return of(this.data);
  }

  createPatientAdmission(payload: PatientAdmissionDto) {
    let results = this.data.filter(box => box.id == payload.boxId);
    if (results.length < 1) {
      console.log("No existen boxes con el id entregado");
      return;
    }

    let box = results[0];

    if (!box.isAvailable) {
      console.log("El box no se encuentra disponible");
      return;
    }

    box.patient = payload.patient;
    box.comments = payload.comments;
    box.isAvailable = false;

  }

  boxRelease(payload: BoxDto) {
    let results = this.data.filter(box => box.id == payload.id);
    if (results.length < 1) {
      console.log("No existen boxes con el id entregado");
      return;
    }

    let box = results[0];
    box.isAvailable = true;
    box.patient = undefined;
    box.comments = undefined;
  }
}
