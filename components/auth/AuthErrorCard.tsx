import React from "react";

import CardWrapper from "./CardWrapper";

const AuthErrorCard = () => {
  return (
    <CardWrapper
      title="Authentication Error"
      desc="Oops! Something went wrong..."
      redirectText={"Back to Sign In"}
      redirectHref={"/auth/sign-in"}
    >
      There is an error when authenticating
    </CardWrapper>
  );
};

export default AuthErrorCard;
