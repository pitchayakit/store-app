import "../app/globals.css";
import MenuItemService from "@/app/services/menuItem";
import CustomerService from "@/app/services/customer";
import React, { useState, useEffect } from "react";

export async function getServerSideProps() {
    const menuItemService = new MenuItemService();
    const customerService = new CustomerService();

    const menuItems = await menuItemService.findAllWithPagination();
    const customers = await customerService.findAll();

    return {
        props: {
            menuItems,
            customers,
        },
    };
}

export default function Home({ menuItems, customers }) {
    const [selectedCustomer, setSelectedCustomer] = useState(customers.data[0]);
    const [selectedMenuItems, setSelectedMenuItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [submitStatus, setSubmitStatus] = useState(null);

    useEffect(() => {
        const handleCalculatePrice = async () => {
            const menuItems = selectedMenuItems.map((item) => {
                return {
                    id: item.id,
                    quantity: item.quantity,
                };
            });

            const response = await fetch("/api/calculate-price", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    customerId: selectedCustomer.id,
                    selectedmenuItems: menuItems,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                setTotalPrice(data.total);
            } else {
                console.error("Failed to calculate total");
            }
        };

        if (selectedCustomer && selectedMenuItems.length > 0) {
            handleCalculatePrice();
        }
    }, [selectedCustomer, selectedMenuItems]);

    const handleSubmitOrder = async () => {
        const response = await fetch("/api/submit-order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                customerId: selectedCustomer.id,
                selectedMenuItems,
            }),
        });

        if (response.ok) {
            setSubmitStatus(1);
        } else {
            setSubmitStatus(0);
        }
    };

    const handleCustomerClick = (customer) => {
        setSelectedCustomer(customer);
    };

    const handleMenuItemClick = (menuItem, quantity) => {
        const existingMenuItem = selectedMenuItems.find(
            (item) => item.id === menuItem.id
        );

        if (quantity > 0) {
            if (existingMenuItem) {
                setSelectedMenuItems(
                    selectedMenuItems.map((item) =>
                        item.id === menuItem.id ? { ...item, quantity } : item
                    )
                );
            } else {
                setSelectedMenuItems([
                    ...selectedMenuItems,
                    { ...menuItem, quantity },
                ]);
            }
        } else if (existingMenuItem) {
            setSelectedMenuItems(
                selectedMenuItems.filter((item) => item.id !== menuItem.id)
            );
        }
    };

    return (
        <main className="flex flex-col items-center justify-between py-4">
            <h1 className="pb-4 text-6xl font-bold">POS store</h1>

            <h2 className="py-4 text-4xl font-bold">Customers</h2>
            <section className="grid grid-cols-3 gap-4">
                {customers.data.map((customer) => (
                    <div
                        key={customer.id}
                        className={`p-4 rounded-lg shadow-lg cursor-pointer ${
                            selectedCustomer.id === customer.id
                                ? "bg-blue-500 text-white"
                                : "bg-white text-gray-800"
                        }`}
                        onClick={() => handleCustomerClick(customer)}
                    >
                        <h2 className="text-xl font-bold">{customer.name}</h2>
                        <p>
                            {customer.has_member_card ? "Member" : "Non-member"}
                        </p>
                    </div>
                ))}
            </section>

            <h2 className="py-4 text-4xl font-bold">Menu</h2>
            <section className="grid grid-cols-3 gap-4">
                {menuItems.data.map((menuItem) => (
                    <div
                        key={menuItem.id}
                        className={`p-4 rounded-lg shadow-lg cursor-pointer ${
                            selectedMenuItems.find(
                                (item) => item.id === menuItem.id
                            )
                                ? "bg-blue-500 text-white"
                                : "bg-white text-gray-800"
                        }`}
                    >
                        <h3 className="text-xl font-bold">{menuItem.name}</h3>
                        <p>${menuItem.price}</p>
                        <input
                            type="number"
                            min="0"
                            defaultValue="0"
                            className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            onChange={(e) =>
                                handleMenuItemClick(
                                    menuItem,
                                    parseInt(e.target.value)
                                )
                            }
                        />
                    </div>
                ))}
            </section>

            <h2 className="py-4 text-4xl font-bold">
                {selectedCustomer.name} Order
            </h2>

            {selectedMenuItems.length > 0 ? (
                <section className="flex flex-wrap gap-4">
                    {selectedMenuItems.map((menuItem) => (
                        <div
                            key={menuItem.id}
                            className="p-4 text-gray-800 bg-white rounded-lg shadow-lg"
                        >
                            <h3 className="text-xl font-bold">
                                {menuItem.name}
                            </h3>
                            <p>${menuItem.price}</p>
                            <p>Quantity: {menuItem.quantity}</p>
                        </div>
                    ))}
                </section>
            ) : (
                <div className="flex items-center justify-center">
                    <p>Your order is empty.</p>
                </div>
            )}

            <p className="py-4">Total Price: ${totalPrice.toFixed(2)}</p>

            {selectedMenuItems.length > 0 && submitStatus !== 1 && (
                <button
                    className="p-4 text-white bg-blue-500 rounded-lg shadow-lg"
                    onClick={handleSubmitOrder}
                >
                    Confirm Order
                </button>
            )}

            {submitStatus === 1 && (
                <p className="py-4 text-green-500">Order submitted successfully</p>
            )}
        </main>
    );
}
