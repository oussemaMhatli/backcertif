export class Question {
  questionText: string;
  img: string;
  zip: string;
  reponse1: { text: string; correct: boolean; id: string };
  reponse2: { text: string; correct: boolean; id: string };
  reponse3: { text: string; correct: boolean; id: string };
  reponse4: { text: string; correct: boolean; id: string };
  categorie: string;
  level: string;
  type: number;
  choices: string[];
  correct:string;
}
