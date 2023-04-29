import { HiCurrencyDollar } from 'react-icons/hi';
export default function Footer({total,setTotal,money,setMoney,bonus,setBonus}) {
    return (
        <footer>
            <HiCurrencyDollar className='icon-dollar'/>
            <span className='total-price'>{total}$</span>
            <button onClick={() => {
                if(money - total <= 100 && money - total >= 0) {
                    alert('duq uneq shat qich gumar')
                }
                else if(money >= total) {
                     setTotal(0);
                     setMoney(money - total);
                     setBonus(bonus + total * 2 / 100)
                }
                if(money < total){
                    alert('Pox chka dzer hashvin')
                }
            }}>Pay</button>
        </footer>
    )
}