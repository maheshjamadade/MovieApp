import { MdHomeFilled } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";



export const navigation = [
    {
        label : "TV Show",
        href : 'tv',
        icon : <PiTelevisionFill/>
    },
    {
        label: "Movies",
        href: "movie",
        icon: <BiSolidMoviePlay/>
    }
]

export const mobileNavigation =[
    {
        label :"Home",
        href: "/",
        icon: <MdHomeFilled/>

    },
    ...navigation,
    {
        label:"search",
        href: "/search",
        icon: <IoSearch/>
    }

]
