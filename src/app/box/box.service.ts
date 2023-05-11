import { Injectable, signal } from '@angular/core';
import { BoxDto, PatientAdmissionDto } from './box.models';

@Injectable({
  providedIn: 'root'
})
export class BoxService {

  boxes = signal<BoxDto[]>([]);
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

  constructor() {
    this.boxes.set(this.data);
  }

  createPatientAdmission(payload: PatientAdmissionDto) {
    this.boxes.mutate((boxes) => {
      let box = boxes.find(box => box.id == payload.boxId);
      if (box !== undefined) {
        box.patient = payload.patient;
        box.comments = payload.comments;
        box.isAvailable = false;
      }
    });
  }

  boxRelease(payload: BoxDto) {
    this.boxes.mutate((boxes) => {
      let box = boxes.find(box => box.id == payload.id);
      if (box !== undefined) {
        box.isAvailable = true;
        box.patient = undefined;
        box.comments = undefined;
      }
    });
  }
}
