/* eslint-disable react/prop-types */
export default function MySolidButton({ children }) {
  return (
    <span className="group relative inline-block text-sm font-medium text-white focus:outline-none w-full">
      <span className="absolute inset-0 border border-deep-orange-700 group-active:border-deep-orange-800 rounded-md"></span>
      <span className="text-center block border border-deep-orange-700 bg-deep-orange-700 px-12 py-3 transition-transform active:border-deep-orange-800 active:bg-deep-orange-800 group-hover:-translate-x-1 group-hover:-translate-y-1 rounded-md">
        {children}
      </span>
    </span>
  );
}
