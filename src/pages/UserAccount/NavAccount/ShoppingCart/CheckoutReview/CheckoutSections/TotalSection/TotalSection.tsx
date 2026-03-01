import { cn } from '../../../../../../../utils/cn';
import classes from './TotalSection.module.css';


export function TotalPrice({ total, discount }: { total: number, discount: boolean }) {
    
    return (
        <section className={classes.checkoutSection}>
            <div>Total</div>
            <div className={cn(discount && classes.total)}>${total.toFixed(2)}</div>
        </section>
    )
}

