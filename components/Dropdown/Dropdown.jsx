export default function Dropdown(props){
    return(
        <div className="bg-white absolute z-20 -left-5 m-3 py-3 px-4 shadow-md w-[170px] rounded-md ">
            <div className="flex flex-col gap-2 text-sm">
                <p className=" cursor-pointer">{props.First}</p>
                <div className='h-[1px] w-full m-auto bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>
                <p className=" cursor-pointer">{props.Second}</p>
            </div>
        </div>
    )
}