import React from "react";
import { useParams } from "react-router-dom";

// react router hook
// The useParams hook returns an object of key/value pairs,
//  of the dynamic params from the current URL that were matched by the <Route path>.
//  Child routes inherit all params from their parent routes.

function Useparams() {
  //it will return me an object
  //we can do calls through this params we want from api etc.
  const param = useParams();
  console.log(param);

  return (
    <div>
      <h1>hi iam params</h1>
      <h1>{param.name}</h1>
    </div>
  );
}

export default Useparams;
