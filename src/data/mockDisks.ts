export interface Disk {
  id: number;
  image: string;
  projectId: number;
  date: string;
  receiverId: number;
  diskName: string;
  noteIn?: string;
  noteOut?: string;
}

export const mockDisks: Disk[] = [
  {
    id: 1,
    image: "/images/disks/01.jpeg",
    projectId: 1,
    date: "12.07.2026",
    receiverId: 1,
    diskName: "А 23",
    noteIn:
      "Диск отдать курьеру Яндекса, взять телефон у курьера и позвонить по номеру +7(966)-095-55-37",
  },
  {
    id: 2,
    image: "/images/disks/02.jpeg",
    projectId: 2,
    date: "10.07.2026",
    receiverId: 2,
    diskName: "Б 07",
  },
  {
    id: 3,
    image: "/images/disks/03.jpeg",
    projectId: 3,
    date: "08.07.2026",
    receiverId: 3,
    diskName: "В 15",
  },
  {
    id: 4,
    image: "/images/disks/04.jpeg",
    projectId: 4,
    date: "05.07.2026",
    receiverId: 1,
    diskName: "Г 01",
  },
  {
    id: 5,
    image: "/images/disks/05.jpeg",
    projectId: 1,
    date: "04.07.2026",
    receiverId: 1,
    diskName: "Д 99",
    noteIn: "Сообщить Елене Хван",
  },
  {
    id: 6,
    image: "/images/disks/06.jpeg",
    projectId: 2,
    date: "03.07.2026",
    receiverId: 2,
    diskName: "Е 11",
  },
  {
    id: 7,
    image: "/images/disks/07.jpeg",
    projectId: 3,
    date: "02.07.2026",
    receiverId: 3,
    diskName: "Ж 22",
  },
  {
    id: 8,
    image: "/images/disks/08.jpeg",
    projectId: 1,
    date: "01.07.2026",
    receiverId: 1,
    diskName: "З 33",
  },
  {
    id: 9,
    image: "/images/disks/09.jpeg",
    projectId: 2,
    date: "31.06.2026",
    receiverId: 2,
    diskName: "И 44",
  },
  {
    id: 10,
    image: "/images/disks/10.jpeg",
    projectId: 3,
    date: "28.06.2026",
    receiverId: 3,
    diskName: "К 55",
  },
  {
    id: 11,
    image: "/images/disks/11.jpeg",
    projectId: 4,
    date: "25.06.2026",
    receiverId: 1,
    diskName: "Л 66",
  },
  {
    id: 12,
    image: "/images/disks/12.jpeg",
    projectId: 1,
    date: "12.06.2026",
    receiverId: 1,
    diskName: "М 77",
  },
];
