import "./weatherDataContainer.scss";

const WeatherDataContainer = ({ data }) => {
  return (
    <div className="p-3 text-light bg-dark rounded-3 weather-box">
      <div className="d-flex justify-content-between align-items-center h-50 icon-and-text">
        {data && (
          <>
            <div>
              <p className="fs-3 fw-bold">{data.location.name}</p>
              <p className="text-secondary text">
                {data.current.condition.text}
              </p>
            </div>
            <img src={data.current.condition.icon} alt="Icon" />
          </>
        )}
      </div>
      <div className="d-flex justify-content-between align-items-center h-50 details">
        {data && (
          <>
            <p className="fw-bold temperature">{data.current.temp_c}°C</p>
            <div className="details-list">
              Details:
              <div className="d-flex justify-content-between">
                <p style={{ marginRight: "15px" }}>
                  Cloudy:{" "}
                  <span className="text-secondary">{data.current.cloud}%</span>
                </p>
                <p>
                  Humidity:{" "}
                  <span className="text-secondary">
                    {data.current.humidity}%
                  </span>
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p style={{ marginRight: "15px" }}>
                  Wind speed:{" "}
                  <span className="text-secondary">
                    {data.current.wind_kph} km/h
                  </span>
                </p>
                <p>
                  Wind dir.:{" "}
                  <span className="text-secondary">
                    {data.current.wind_dir}
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
