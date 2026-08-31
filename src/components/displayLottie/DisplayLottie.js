import React, {memo, useEffect, useRef} from "react";
// The full lottie-web player evaluates animation expressions with `new
// Function`, which the Content-Security-Policy in public/index.html blocks. It
// fails silently: the player builds an empty <svg> and the section renders as a
// blank hole. The "light" build ships without the expression evaluator, so it
// needs no 'unsafe-eval' and keeps the policy strict.
import lottie from "lottie-web/build/player/lottie_light";

const DisplayLottie = memo(function DisplayLottie({animationData}) {
  const container = useRef(null);

  useEffect(() => {
    if (!container.current) {
      return undefined;
    }
    const animation = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData
    });
    return () => animation.destroy();
  }, [animationData]);

  return <div ref={container} />;
});

export default DisplayLottie;
