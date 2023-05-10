
export interface BoxDto {
    id: number;
    name: string;
    doctor: string;
    patient?: string;
    comments?: string;
    isAvailable: boolean;
}

export interface PatientAdmissionDto {
    patient: string;
    boxId: number;
    comments: string;
}
