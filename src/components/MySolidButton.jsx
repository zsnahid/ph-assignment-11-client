/* eslint-disable react/prop-types */
export default function MySolidButton({ children }) {
  return (
    <span className="group relative inline-block text-sm font-medium text-white focus:outline-none w-full">
      <span className="absolute inset-0 border border-primary group-active:border-primary rounded-md"></span>
      <span className="text-center block border border-primary bg-primary px-12 py-3 transition-transform active:border-primary active:bg-primary group-hover:-translate-x-1 group-hover:-translate-y-1 rounded-md">
        {children}
      </span>
    </span>
  );
}
