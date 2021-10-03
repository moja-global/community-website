export const pastMeetings = [
  new MeetingConstrcutor('test 1', '29-07-2021', 'https://www.google.com'),
  new MeetingConstrcutor('test 2', '25-07-2021', 'https://www.google.com'),
  new MeetingConstrcutor('test 3', '29-07-2021', 'https://www.google.com'),
  new MeetingConstrcutor('test 4', '25-06-2021', 'https://www.google.com'),
  new MeetingConstrcutor('test 5', '29-06-2021', 'https://www.google.com'),
  new MeetingConstrcutor('test 6', '25-05-2021', 'https://www.google.com'),
];

export const upcomingMeetings = [
  new MeetingConstrcutor('test 7', '19-09-2019', 'https://www.moja.global', 'Harsh Bardhan'),
  new MeetingConstrcutor('test 8', '29-09-2019', 'https://www.moja.global', 'Harsh Bardhan'),
  new MeetingConstrcutor('test 9', '19-10-2019', 'https://www.moja.global', 'Harsh Bardhan'),
  new MeetingConstrcutor('test 10', '29-11-2019', 'https://www.moja.global', 'Harsh Bardhan'),
  new MeetingConstrcutor('test 11', '19-12-2019', 'https://www.moja.global', 'Harsh Bardhan'),
  new MeetingConstrcutor('test 12', '29-12-2019', 'https://www.moja.global', 'Harsh Bardhan'),
];

function MeetingConstrcutor(agenda, dateHeld, notes, chairedBy = 'moja community') {
  this.agenda = agenda;
  this.chairedBy = chairedBy;
  this.dateHeld = dateHeld;
  this.notes = notes;
}
