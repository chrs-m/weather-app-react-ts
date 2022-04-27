import React, { PropsWithChildren } from "react";

export interface Props {
  dataPoint: string;
  dataPointValue: string;
}

const WeatherDataPoint = (props: PropsWithChildren<Props>) => {
  return (
    <div>
      <p>
        {props.dataPoint}: {props.dataPointValue}
      </p>
    </div>
  );
};

export default WeatherDataPoint;
