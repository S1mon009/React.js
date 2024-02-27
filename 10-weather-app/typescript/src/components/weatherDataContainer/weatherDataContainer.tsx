import { FC } from "react";
import "./weatherDataContainer.scss";

type WeatherDataContainerProps = {
  data: {
    location: {
      name: string;
    };
    current: {
      condition: {
        text: string;
        icon: string;
      };
      temp_c: number;
      cloud: number;
      humidity: number;
      wind_kph: number;
      wind_dir: string;
    };
  };
};

const WeatherDataContainer: FC<WeatherDataContainerProps> = (props) => {
  return (
    <div className="p-3 text-light bg-dark rounded-3 weather-box">
      <div className="d-flex justify-content-between align-items-center h-50 icon-and-text">
        {props.data && (
          <>
            <div>
              <p className="fs-3 fw-bold">{props.data.location.name}</p>
              <p className="text-secondary text">
                {props.data.current.condition.text}
              </p>
            </div>
            <img src={props.data.current.condition.icon} alt="Icon" />
          </>
        )}
      </div>
      <div className="d-flex justify-content-between align-items-center h-50 details">
        {props.data && (
          <>
            <p className="fw-bold temperature">{props.data.current.temp_c}°C</p>
            <div className="details-list">
              Details:
              <div className="d-flex justify-content-between">
                <p style={{ marginRight: "15px" }}>
                  Cloudy:{" "}
                  <span className="text-secondary">
                    {props.data.current.cloud}%
                  </span>
                </p>
                <p>
                  Humidity:{" "}
                  <span className="text-secondary">
                    {props.data.current.humidity}%
                  </span>
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p style={{ marginRight: "15px" }}>
                  Wind speed:{" "}
                  <span className="text-secondary">
                    {props.data.current.wind_kph} km/h
                  </span>
                </p>
                <p>
                  Wind dir.:{" "}
                  <span className="text-secondary">
                    {props.data.current.wind_dir}
                  </span>
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherDataContainer;
