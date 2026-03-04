import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../components/Button/Button';
import { useOrders } from '../../../../hooks/orders/useOrders';
import { DataLoader } from '../../../../components/DataLoader/DataLoader';

import classes from './MyOrders.module.css';

export default function MyOrders() {
    const { data: orders, isLoading, error } = useOrders();
    const navigate = useNavigate();

    const handleClick = (id: string) => {
        const path = `${id}`;
        navigate(path);
    }

    return (
        <DataLoader
            loading={isLoading}
            loaded={!!orders}
            error={error}
        >
            <table className={classes.ordersTable}>
                <thead>
                    <tr>
                        <th>Order</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Total</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {(orders || []).map(order => (
                        <tr key={order.id}>
                            <td className={classes.orderId}>{order.id}</td>
                            <td>
                                {new Date(order.createdAt).toLocaleDateString("en-US", {
                                    year: 'numeric',
                                    month: "long",
                                    day: "numeric"
                                })}
                            </td>
                            <td>{order.status}</td>
                            <td className={classes.total}>${order.totalPrice}</td>
                            <td>
                                <Button
                                    bgColor='#ddd'
                                    textColor='black'
                                    text='VIEW'
                                    onClick={() => handleClick(order.id)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </DataLoader>
    )
}