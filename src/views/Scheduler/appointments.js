import {
  amber,
  deepOrange,
  pink,
  purple,
  teal,
} from '@material-ui/core/colors';

export const appointments = [
  {
    id: 0,
    title: `Watercolor Landscape`,
    roomId: 1,
    startDate: new Date(2017, 4, 1, 9, 30),
    endDate: new Date(2017, 4, 1, 11),
  },
  {
    id: 1,
    title: `Oil Painting for Beginners`,
    roomId: 2,
    startDate: new Date(2017, 4, 1, 9, 30),
    endDate: new Date(2017, 4, 1, 11),
  },
  {
    id: 2,
    title: `Testing`,
    roomId: 3,
    startDate: new Date(2017, 4, 1, 12, 0),
    endDate: new Date(2017, 4, 1, 13, 0),
  },
  {
    id: 3,
    title: `Meeting of Instructors`,
    roomId: 4,
    startDate: new Date(2017, 4, 1, 9, 0),
    endDate: new Date(2017, 4, 1, 9, 15),
  },
  {
    id: 4,
    title: `Recruiting students`,
    roomId: 5,
    startDate: new Date(2017, 4, 26, 10, 0),
    endDate: new Date(2017, 4, 26, 11, 0),
  },
  {
    id: 5,
    title: `Final exams`,
    roomId: 3,
    startDate: new Date(2017, 4, 26, 12, 0),
    endDate: new Date(2017, 4, 26, 13, 35),
  },
  {
    id: 6,
    title: `Monthly Planning`,
    roomId: 4,
    startDate: new Date(2017, 4, 26, 14, 30),
    endDate: new Date(2017, 4, 26, 15, 45),
  },
  {
    id: 7,
    title: `Open Day`,
    roomId: 5,
    startDate: new Date(2017, 4, 1, 9, 30),
    endDate: new Date(2017, 4, 1, 13),
  },
];

export const resourcesData = [
  {
    text: `Room 101`,
    id: 1,
    color: amber,
  },
  {
    text: `Room 102`,
    id: 2,
    color: pink,
  },
  {
    text: `Room 103`,
    id: 3,
    color: purple,
  },
  {
    text: `Meeting room`,
    id: 4,
    color: deepOrange,
  },
  {
    text: `Conference hall`,
    id: 5,
    color: teal,
  },
];
