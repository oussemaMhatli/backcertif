export class Question {
  questionText: string;
  img: string;
  zip: string;
  reponse1: { text: string; correct: boolean };
  reponse2: { text: string; correct: boolean };
  reponse3: { text: string; correct: boolean };
  reponse4: { text: string; correct: boolean };
  categorie: string;
  level: string;
  type: number;
}
