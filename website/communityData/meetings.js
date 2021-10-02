export const pastMeetings = [
  new MeetingConstrcutor('test 1', '29-07-2021', 'https://www.google.com'),
];

export const upcomingMeetings = [
  new MeetingConstrcutor('test 2', '19-09-2019', 'https://www.moja.global', 'Harsh Bardhan'),
];

function MeetingConstrcutor(agenda, dateHeld, notes, chairedBy = 'moja community') {
  this.agenda = agenda;
  this.chairedBy = chairedBy;
  this.dateHeld = dateHeld;
  this.notes = notes;
}
