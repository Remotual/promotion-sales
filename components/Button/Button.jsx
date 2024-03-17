export default function Button(props) {
  return (
    <button
      disabled={props.loading}
      className="flex justify-center bg-[#FF7A00] md:w-1/4 text-white shadow-md tracking-wide font-medium p-2 rounded-md "
    >
      {props.loading ? (
        <div className="border-2 border-white  border-y-transparent animate-spin animate-duration-500  h-4 w-4 rounded-full  "></div>
      ) : (
        props.children
      )}
    </button>
  );
}
