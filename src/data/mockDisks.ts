export interface Disk {
  id: string;
  image: string;
  projectName: string;
  date: string;
  receiver: string;
  diskName: string;
  noteIn?: string
}

export const mockDisks: Disk[] = [
  {
    id: '1',
    image: '/images/disks/01.jpeg',
    projectName: 'Чебурашка 3',
    date: '12.07.2026',
    receiver: 'Vladimir Papin',
    diskName: 'А 23',
    noteIn: 'Диск отдать курьеру Яндекса, взять телефон у курьера и позвонить по номеру +7(966)-095-55-37',
  },
  {
    id: '2',
    image: '/images/disks/02.jpeg',
    projectName: 'Матрица 4 Матрица 4 Матрица 4',
    date: '10.07.2026',
    receiver: 'Иван Петров',
    diskName: 'Б 07 Б 07 Б 07 Б 07 Б 07 Б 07 Б 07 Б 07 Б 07 Б 07',
  },
  {
    id: '3',
    image: '/images/disks/03.jpeg',
    projectName: 'Аватар 3',
    date: '08.07.2026',
    receiver: 'Anna Sidorova',
    diskName: 'В 15',
  },
  {
    id: '4',
    image: '/images/disks/04.jpeg',
    projectName: 'Дюна 3',
    date: '05.07.2026',
    receiver: 'Vladimir Papin',
    diskName: 'Г 01',
  },
  {
    id: '5',
    image: '/images/disks/05.jpeg',
    projectName: 'Чебурашка 3',
    date: '12.07.2026',
    receiver: 'Vladimir Papin',
    diskName: 'А 23',
    noteIn: 'Сообщить Елене Хван',
  },
  {
    id: '6',
    image: '/images/disks/06.jpeg',
    projectName: 'Матрица 4',
    date: '10.07.2026',
    receiver: 'Иван Петров',
    diskName: 'Б 07',
  },
  {
    id: '7',
    image: '/images/disks/07.jpeg',
    projectName: 'Аватар 3',
    date: '08.07.2026',
    receiver: 'Anna Sidorova',
    diskName: 'В 15',
  },
  {
    id: '8',
    image: '/images/disks/08.jpeg',
    projectName: 'Чебурашка 3',
    date: '12.07.2026',
    receiver: 'Vladimir Papin',
    diskName: 'А 23',
  },
  {
    id: '9',
    image: '/images/disks/09.jpeg',
    projectName: 'Матрица 4',
    date: '10.07.2026',
    receiver: 'Иван Петров',
    diskName: 'Б 07',
  },
  {
    id: '10',
    image: '/images/disks/10.jpeg',
    projectName: 'Аватар 3',
    date: '08.07.2026',
    receiver: 'Anna Sidorova',
    diskName: 'В 15',
  },
  {
    id: '11',
    image: '/images/disks/11.jpeg',
    projectName: 'Дюна 3',
    date: '05.07.2026',
    receiver: 'Vladimir Papin',
    diskName: 'Г 01',
  },
  {
    id: '12',
    image: '/images/disks/12.jpeg',
    projectName: 'Чебурашка 3',
    date: '12.07.2026',
    receiver: 'Vladimir Papin',
    diskName: 'А 23',
  },
];