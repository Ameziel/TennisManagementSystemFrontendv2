export interface Formulecours {
  id: string;
  libelle : string;
  effectifMaximum : number;
  nombreSeanceTotal : number;
  nombreSeanceHebdomadaire : number;
  dureeSeance : string;
  tarif: number;
  annee : number;
  dateDebut : Date;
  dateFin : Date;
  periode : string;
  typeBalle: string;
}
