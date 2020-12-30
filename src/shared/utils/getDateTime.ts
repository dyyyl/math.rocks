import padDateTime from './padDateTime';

const getDateTime = () => {
  const currentDate = new Date();

  const date = padDateTime(currentDate.getDate());

  const month = padDateTime(currentDate.getMonth() + 1);

  const year = currentDate.getFullYear();

  const dateString = `${date}/${month}/${year}`;

  const hours = padDateTime(currentDate.getHours());

  const minutes = padDateTime(currentDate.getMinutes());

  const time = `${hours}:${minutes}`;

  return `${dateString} ${time}`;
};

export default getDateTime;
