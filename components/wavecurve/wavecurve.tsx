export default function WaveCurve() {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden ">
      <svg
        className="relative block w-full h-[75px] md:h-[120px] lg:h-[240px] "
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,120 L1200,120 L1200,0 C900,90 600,120 0,120 Z" fill="white" />
      </svg>
    </div>
  );
}
