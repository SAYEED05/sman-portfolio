import Image from "next/image";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/app/Components/Scene"), { ssr: false });
export default function Home() {
  return (
    <div id="canvas-container">
      <Scene />
    </div>
  );
}
