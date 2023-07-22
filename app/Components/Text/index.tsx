import React from "react";
import { OrbitControls, Text } from "@react-three/drei";
const ReusableText = (props: any) => {
  return (
    <>
      <pointLight position={[5, 5, 5]} />
      <Text
        scale={props.scale ?? [1, 1, 1]}
        position={props.textPosition}
        color={props.color}
        anchorX={props.anchorX}
        anchorY={props.anchorY}
      >
        {props.content}
      </Text>

      {/* <OrbitControls /> */}
    </>
  );
};

export default ReusableText;
