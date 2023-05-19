import { useSelector } from "react-redux";
import Activity from "../../Components/Activity/Activity";

const Activities = (props) => {
  const allActivities = useSelector((state) => state.allActivities);

  if(!allActivities.length){
    return (
        <div>
            NO ACTIVITIES YET...
        </div>
    )
  }
  return (
    <div>
      {allActivities &&
        allActivities.map((activity) => {
          return (
            <Activity
              key={activity.id}
              id={activity.id}
              name={activity.name}
              difficulty={activity.difficulty}
              duration={activity.duration}
              season={activity.season}
              image={activity.image}
            />
          );
        })}
    </div>
  );
};

export default Activities;
