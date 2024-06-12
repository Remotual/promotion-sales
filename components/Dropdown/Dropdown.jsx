export default function Dropdown(props) {
  return (
    <div className="bg-white absolute z-20 -left-5 m-3 shadow-md w-[170px] overflow-hidden rounded-md " style={{"z-index": "9999"}}>
      <div className="flex flex-col text-sm">
        {props.data?.map((items, key) => (
          <div  key={key}className="py-4 px-6 hover:text-white hover:bg-[#ffa465] transition-all duration-200 ease-in-out cursor-pointer" >
            <p             
              className=" cursor-pointer"
              onClick={() => { window.location.href = items.url} }
            >
              {items.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

