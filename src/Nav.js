import { navobj } from "./navobj"
export default function nav() {
    return (
        <nav>
            
                <div className="logo">
                    <img src="https://logos-world.net/wp-content/uploads/2022/01/iPhone-Emblem.png"/>
                </div>
            {navobj.map(w => <ul key={w.w} className="nav-ul">    
                <li className="ul-li"><a href={w.href} className="li-a">{w.text}</a></li>
                </ul>)}
        </nav>
    )
}