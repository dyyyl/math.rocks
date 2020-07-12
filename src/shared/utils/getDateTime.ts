import sanitizeDateTime from './sanitizeDateTime';

const getDateTime = () => {
  const currentDate = new Date();

  const date = sanitizeDateTime(currentDate.getDate());

  const month = sanitizeDateTime(currentDate.getMonth() + 1);

  const year = currentDate.getFullYear();

  const dateString = `${date}/${month}/${year}`;

  const hours = sanitizeDateTime(currentDate.getHours());

  const minutes = sanitizeDateTime(currentDate.getMinutes());

  const time = `${hours}:${minutes}`;

  return `${dateString} ${time}`;
};

export default getDateTime;
