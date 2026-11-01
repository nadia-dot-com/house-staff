import { cn } from '@/utils/cn';
import classes from '@/pages/UserAccount/NavAccount/ShoppingCart/CheckoutReview/CheckoutSections/TotalSection/TotalSection.module.scss';

export function TotalPrice({ total, discount }: { total: number, discount: boolean }) {
    
    return (
        <div className={classes.checkoutSection}>
            <div>Total</div>
            <div className={cn(discount && classes.total)}>${total.toFixed(2)}</div>
        </div>
    )
}

