import Directory from "../../components/directory/directory.component.jsx";
import { Outlet } from "react-router-dom";

const Home = () => {
 

  return (
    <div>
        {/* outlet determines where the nested element should be displayed */}
        <Outlet />
        <Directory/>
    </div>
  );
};

export default Home;