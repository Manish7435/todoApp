const Header = ({text, bg, count})=>{
    return(
        <div className={`${bg} flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white`}>
           {text} { count >0 &&<div className=' flex ml-2 text-black bg-white w-5 h-5 rounded-full items-center justify-center'> {count}</div>}  
        </div>
    )
}

export default Header