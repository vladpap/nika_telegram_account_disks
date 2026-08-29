export interface User {
  id: number;
  name: string;
  userNameTelegram: string;
  idTelegram: number;
  avatar: string;
  isSacked: boolean;
}

export const mockUsers: User[] = [
  {
    id: 1,
    name: "Vladimir Papin",
    userNameTelegram: "vladimirpapin",
    idTelegram: 123456789,
    avatar: "/images/avatars/01.jpg",
    isSacked: false,
  },
  {
    id: 2,
    name: "Сергей Кирков",
    userNameTelegram: "sergeykirkov",
    idTelegram: 987654321,
    avatar: "/images/avatars/02.jpg",
    isSacked: false,
  },
  {
    id: 3,
    name: "Илья Кондратьев",
    userNameTelegram: "kondratevilya",
    idTelegram: 555666777,
    avatar: "/images/avatars/03.jpg",
    isSacked: false,
  },
];
