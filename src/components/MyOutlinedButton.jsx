/* eslint-disable react/prop-types */
export default function MyOutlinedButton({ children }) {
  return (
    <span className="group relative inline-block text-sm font-medium text-primary focus:outline-none focus:ring active:text-primary w-full">
      <span className="absolute inset-0 border border-current rounded-md"></span>
      <span className="block border border-current bg-white px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 rounded-md">
        {children}
      </span>
    </span>
  );
}
