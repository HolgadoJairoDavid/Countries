import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryById } from "../../Redux/actions";
// const imageContext = require.context("../../assets/", true);
import Activity from "../../Components/Activity/Activity";

const Detail = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const countryById = useSelector((state) => state.countryById);

  useEffect(() => {
    dispatch(getCountryById(id));
  }, [dispatch, id]);

  return (
    <div>
      <div>
        <div>
          <div>
            <img src={countryById.image} alt={countryById.name} />
          </div>
          <h1>{countryById.name}</h1>
          <h3>Continent: {countryById.continent}</h3>
          <h3>Capital: {countryById.capital}</h3>
          <h3>Sub Región: {countryById.subregion}</h3>
          <h3>Área: {countryById.area}</h3>
          <h3>Population: {countryById.population}</h3>
        </div>

        <div>
          <h1>ACTIVIDADES: </h1>

          {countryById.activitiesData &&
            countryById.activitiesData.map((activity, index) => {
              return (
                <Activity
                countryId={id} 
                key={activity.id}
                id={activity.id}
                name={activity.name}
                difficulty={activity.difficulty}
                duration={activity.duration}
                season={activity.season}
                image={activity.image.slice(7, activity.image.length)}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Detail;
