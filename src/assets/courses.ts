import { Course } from 'src/app/shared/interfaces/course';

export const courses: Course[] = [
  {
    id: 1,
    title: 'Angular basic',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem saepe perspiciatis
                exercitationem, harum
                voluptate necessitatibus illo eos corporis laudantium nam enim facilis ex consequatur explicabo esse.
                Distinctio
                temporibus vel iste!`,
    authors: ['Test1 Test1', 'Test2 Test2', 'Test3 Test3'],
    duration: 121,
    created: new Date(),
  },
  {
    id: 2,
    title: 'Java basic',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem saepe perspiciatis
                exercitationem, harum
                voluptate necessitatibus illo eos corporis laudantium nam enim facilis ex consequatur explicabo esse.
                Distinctio
                temporibus vel iste!`,
    authors: ['Test1 Test1', 'Test2 Test2', 'Test3 Test3'],
    duration: 90,
    created: '2021.04.30 15:40:20',
  },
  {
    id: 3,
    title: 'Python advanced',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem saepe perspiciatis
                exercitationem, harum
                voluptate necessitatibus illo eos corporis laudantium nam enim facilis ex consequatur explicabo esse.
                Distinctio
                temporibus vel iste!`,
    authors: ['Test1 Test1', 'Test2 Test2', 'Test3 Test3'],
    duration: 60,
    created: new Date(),
  },
  {
    id: 4,
    title: 'Angular advanced',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem saepe perspiciatis
                exercitationem, harum
                voluptate necessitatibus illo eos corporis laudantium nam enim facilis ex consequatur explicabo esse.
                Distinctio
                temporibus vel iste!`,
    authors: ['Test1 Test1', 'Test2 Test2', 'Test3 Test3'],
    duration: 45,
    created: '2021.10.01 9:40',
  },
  {
    id: 5,
    title: 'Angular master',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem saepe perspiciatis
                exercitationem, harum
                voluptate necessitatibus illo eos corporis laudantium nam enim facilis ex consequatur explicabo esse.
                Distinctio
                temporibus vel iste!`,
    authors: ['Test1 Test1', 'Test2 Test2', 'Test3 Test3'],
    duration: 298,
    created: '2020.01.30 11:42:20',
  },
];
