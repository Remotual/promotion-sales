export default function Dropdown(props) {
  return (
    <div className="bg-white absolute z-20 -left-5 m-3 shadow-md w-[170px] overflow-hidden rounded-md " style={{"z-index": "9999"}}>
      <div className="flex flex-col text-sm">
        {props.data?.map((items, key) => (
          <div className="py-4 px-6 hover:text-white hover:bg-[#ffa465] transition-all duration-200 ease-in-out cursor-pointer" >
            <p
              key={key}
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

{
  /* <p className=" cursor-pointer">{props.First}</p>
<div className='h-[1px] w-full m-auto bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>
<p className=" cursor-pointer">{props.Second}</p>
<div className='h-[1px] w-full m-auto bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>
<p className=" cursor-pointer">{props.Third}</p>
<div className='h-[1px] w-full m-auto bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>
<p className=" cursor-pointer">{props.Fourth}</p> */
}
