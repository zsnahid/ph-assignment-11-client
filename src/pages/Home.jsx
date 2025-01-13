import Slider from "../components/Slider";

export default function Home() {
  return (
    <>
      <Slider />
      <div className="w-11/12 mx-auto py-20 grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="col-span-6 space-y-3"></div>
      </div>
    </>
  );
}
