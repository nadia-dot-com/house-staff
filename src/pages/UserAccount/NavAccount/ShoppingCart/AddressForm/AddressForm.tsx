import { FormEvent, RefObject } from 'react';
import { useUserContext } from '../../../../../context/UserContext'
import classes from './AddressForm.module.css'
import { useCheckoutContext } from '../../../../../context/CheckoutContext';
import { DataProps } from '../../../../../types/checkoutTypes';
import { useOptions } from '../../../../../hooks/options/useOptions'; 

export function AddressForm({ formRef, onSubmit }: { formRef?: RefObject<HTMLFormElement | null>; onSubmit: (data: DataProps) => void }) {
    const { user } = useUserContext();
    const { shippingData } = useCheckoutContext();
    const { data } = useOptions();

    const countries = data?.countries ?? [];

    if (!user) return null;

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const updatedCheckoutData = {
            ...(shippingData ?? {}),
            fullName: String(formData.get("fullName")) || null,
            address: String(formData.get("street")) || null,
            postalCode: String(formData.get("postalCode")) || null,
            city: String(formData.get("city")) || null,
            country: String(formData.get("country")) || null,
            phone: String(formData.get("phone")) || null,
            email: String(formData.get("email")) || null,
            notes: String(formData.get("notes")) || null,
        }

        onSubmit(updatedCheckoutData)
    }

    return (
        <div className={classes.formContainer}>
            <form
                className={classes.addressForm}
                ref={formRef}
                onSubmit={handleFormSubmit}
            >
                <h2 className={classes.title}>Billing Details</h2>

                <div className={classes.inputGroup}>
                    <label>Full Name *</label>
                    <input
                        className={classes.input}
                        name='fullName'
                        type="text"
                        defaultValue={shippingData?.fullName ?? user?.name ?? ""}
                        placeholder='Full Name'
                        required
                    />
                </div>

                <h4 className={classes.subTitle}>Address *</h4>

                <div className={classes.inputGroup}>
                    <label>Street *</label>
                    <input
                        className={classes.input}
                        name="street"
                        defaultValue={shippingData?.address ?? user?.address ?? ""}
                        placeholder="Street and house number"
                        required
                    />
                </div>

                <div className={classes.inputGroup}>
                    <label>Postal Code *</label>
                    <input
                        className={classes.input}
                        name="postalCode"
                        defaultValue={shippingData?.postalCode ?? user?.postalCode ?? ""}
                        placeholder="e.g. 12345"
                        required
                    />
                </div>

                <div className={classes.inputGroup}>
                    <label>Town / City *</label>
                    <input
                        className={classes.input}
                        name="city"
                        defaultValue={shippingData?.city ?? user?.city ?? ""}
                        placeholder="City"
                        required
                    />
                </div>

                <div className={classes.inputGroup}>
                    <label>Country / Region *</label>
                    <select
                        className={classes.input}
                        name='country'
                        defaultValue={shippingData?.country ?? user?.country ?? ""}
                        required
                    >
                        <option value= "Select Country" disabled>Select Country</option>

                        {
                            countries.map(country => (
                                <option key={country.name} value={country.name}>{country.name}</option>
                            ))
                        }

                    </select>
                </div>

                <div className={classes.inputGroup}>
                    <label>Phone *</label>
                    <input
                        className={classes.input}
                        type="tel"
                        pattern='[0-9]{9,15}'
                        name="phone"
                        defaultValue={shippingData?.phone ?? user?.phone ?? ""}
                        placeholder="Phone"
                        required
                    />
                </div>

                <div className={classes.inputGroup}>
                    <label>Email Address *</label>
                    <input
                        className={classes.input}
                        name='email'
                        type='email'
                        defaultValue={shippingData?.email ?? user?.email ?? ""}
                        required
                    />
                </div>

                <div className={classes.inputGroup}>
                    <label>Order notes (optional)</label>
                    <textarea
                        name='notes'
                        className={classes.textarea}
                        defaultValue={shippingData?.notes ?? ""}
                        placeholder='Notes about your order, e.g. special notes for delivery.'
                    />
                </div>
            </form>
        </div>
    )
}