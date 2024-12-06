import video from "../assets/fond.mp4";

export default function FondVideo() {
  return (
    <div className="fixed -z-10 max-h-dvh overflow-hidden">
      <video className="w-full object-cover min-h-dvh  " autoPlay loop>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}
