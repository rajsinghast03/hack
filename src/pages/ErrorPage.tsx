import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function ErrorPage() {
  // const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      {/* <p>{error.data || error.message}</p> */}
      <Link to="-1">
        <Button variant="outline">&larr; Go back</Button>
      </Link>
    </div>
  );
}

export default ErrorPage;
