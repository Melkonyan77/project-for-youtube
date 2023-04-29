import { SiCashapp } from 'react-icons/si';
import { GiPresent } from 'react-icons/gi';
export default function Header({money,bonus,setMoney,setBonus}) {
    return(
        <header>
            <div className="money">
                <SiCashapp className='icon-dollar'/>
                <span>{money}$</span>
            </div>
            <button onClick={() => {
                setBonus(0);
                setMoney(Math.round(money + bonus));
                }}>Cashback</button>
            <div className='bonus'>
                <GiPresent className='icon-bonus'/>
                <span>{bonus}$</span>
            </div>
        </header>
    )
}

//props-a kochvum dasi anuny