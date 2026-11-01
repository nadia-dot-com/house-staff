import classes from '@/pages/UserAccount/NavAccount/ShoppingCart/CheckoutReview/CheckoutSections/VatSection/VatSection.module.scss'

export function Vat({ vat }: { vat: number}) {

    return (
        <div className={classes.checkoutSection}>
            <div>VAT</div>
            <div>${vat.toFixed(2)}</div>
        </div>
    )
}