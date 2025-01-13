/* eslint-disable react/prop-types */
export default function MyIconButton({ icon, text }) {
  return (
    <span className="inline-flex flex-grow justify-center items-center gap-2 rounded border border-gray-600 px-2 py-1 text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring active:bg-gray-500 w-full">
      <span className="text-sm font-medium"> {text} </span>

      {icon}
    </span>
  );
}
