import { Outlet, useNavigation } from "react-router-dom";
import Loader from "../ui/Loader";
import Navbar from "./Navbar";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen">
      {isLoading && <Loader />}
      <Navbar />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
