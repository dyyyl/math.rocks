import React, { useEffect, useState } from 'react';

import getDateTime from 'shared/utils/getDateTime';

import DateTimeContainer from './DateTimeContainer';

const DateTime = (): JSX.Element => {
  const [dateTime, setDateTime] = useState(getDateTime());

  useEffect(() => {
    const currentDateTime = getDateTime();

    setDateTime(currentDateTime);
  }, []);
  return (
    <DateTimeContainer>
      <b>
        <time dateTime={dateTime}>{dateTime}</time>
      </b>
    </DateTimeContainer>
  );
};

export default DateTime;
