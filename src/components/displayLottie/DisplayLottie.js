import React, {Suspense, memo} from "react";
import Lottie from "lottie-react";
import Loading from "../../containers/loading/Loading";

const DisplayLottie = memo(function DisplayLottie({animationData}) {
  return (
    <Suspense fallback={<Loading />}>
      <Lottie animationData={animationData} loop={true} />
    </Suspense>
  );
});

export default DisplayLottie;
