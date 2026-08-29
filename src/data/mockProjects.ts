export interface Project {
  id: number;
  title: string;
  date: string;
  inArchive: boolean;
}

export const mockProjects: Project[] = [
  {
    id: 1,
    title: "Чебурашка 3",
    date: "01.06.2026",
    inArchive: false,
  },
  {
    id: 2,
    title: "Матрица 4",
    date: "15.05.2026",
    inArchive: false,
  },
  {
    id: 3,
    title: "Аватар 3",
    date: "20.04.2026",
    inArchive: false,
  },
  {
    id: 4,
    title: "Дюна 3",
    date: "10.03.2026",
    inArchive: false,
  },
];
