const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

export const setDateText = (date: Date | null) => {
  if (date) return dateFormatter.format(date);

  return 'Date not found';
}