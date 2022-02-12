// format for adding a meeting is new Date(year , month-1 , date)
const meetings = [
  {
    title: 'Documentation Meeting',
    start: new Date(2021, 11, 2, 16, 30, 0),
    end: new Date(2021, 11, 2, 17, 0, 0),
    gmeetLink: 'google.com',
  },
  {
    title: 'Technical Working Group Meeting',
    start: new Date(2021, 11, 4, 16, 30, 0),
    end: new Date(2021, 11, 4, 17, 0, 0),
    gmeetLink: 'google2.com',
  },
  {
    title: 'UI Working Group Meeting',
    start: new Date(2022, 0, 6, 16, 30, 0),
    end: new Date(2022, 0, 6, 17, 0, 0),
    gmeetLink: 'google.com',
  },
];

export default meetings;
