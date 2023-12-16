export default function SkeletonCard2() {
  return (
    <div className="flex w-full flex-1 flex-col items-center">
      <div className="mt-12 w-[250px] animate-pulse flex-row items-center justify-center rounded-xl border p-2 ">
        <div className="flex flex-col space-y-2">
          <div className="h-[300px] rounded-md bg-gray-300 "></div>
          <div className="h-6 rounded-md bg-gray-300 "></div>
        </div>
      </div>
    </div>
  );
}
