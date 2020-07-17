import React, { useState } from 'react';

import useInterval from 'shared/hooks/useInterval';
import getDateTime from 'shared/utils/getDateTime';

import DateTimeContainer from './DateTimeContainer';

const DateTime = (): JSX.Element => {
  const [dateTime, setDateTime] = useState(getDateTime());

  useInterval(() => {
    setDateTime(getDateTime());
  }, 25000);

  return (
    <DateTimeContainer>
      <b>
        <time dateTime={dateTime}>{dateTime}</time>
      </b>
    </DateTimeContainer>
  );
};

export default DateTime;
