import { GrClose } from 'react-icons/gr';
import { asideobj } from "./asideobj";
export default function Aside() {
    return (
        <aside>
            
            <div className='aside-left-myapp'><GrClose className='pakel'/> My App</div>
            <div className='takimas'>
               {asideobj.map(l => <div key={l.l} className='aside-div-li'>
                    <ul className='yuel'>
                          <li className='yuel-li'>{l.icon}<a href={l.href} className='yuel-li-a'>{l.text}</a></li>                   
                    </ul>
               </div>)}
               </div>
        </aside>
    )
}