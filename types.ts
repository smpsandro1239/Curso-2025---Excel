export interface GlossaryTerm {
  word: string;
  def: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  feedback: string;
}

export interface Example {
  title: string;
  description: string;
  code: string;
}

export interface Challenge {
  description: string;
  initialCode: string;
  solution: string;
}

export interface Lesson {
  id: string;
  title: string;
  illustration: string;
  theory: string;
  quickNote?: string;
  examples: Example[];
  quiz: QuizQuestion[];
  challenge: Challenge;
  glossary?: GlossaryTerm[];
}

export interface Module {
  id: string;
  title: string;
  bigIdea: string;
  cover: string;
  lessons: Lesson[];
}

export interface Course {
  title: string;
  modules: Module[];
}
