// pages/api/submit-order.js
import CustomerService from "@/app/services/customer";
import MenuItemService from "@/app/services/menuItem";
import OrderService from "@/app/services/order";
import OrderItemService from "@/app/services/orderItem";

export const calculateTotalPrice = async (customerId, selectedMenuItems) => {
    // Find the customer by ID
    const customerService = new CustomerService();
    const customer = await customerService.findById(customerId);

    // Find the selected menu items by ID
    const selectedmenuItemIds = selectedMenuItems.map((item) => item.id);

    // Query the database to get the selected menu items
    const menuItemService = new MenuItemService();
    const menuItems = await menuItemService.findAll({
        where: { id: selectedmenuItemIds },
    });

    let total = 0;

    // Calculate the total price
    for (const menuItem of menuItems.data) {
        const selectedmenuItem = selectedMenuItems.find(
            (item) => item.id === menuItem.id
        );

        total += menuItem.price * selectedmenuItem.quantity;
    }

    // Apply a 5% discount if the customer is a member
    if (customer.hasMemberCard) {
        total *= 0.95;
    }

    return total;
};

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    // Get the customer ID and selected menu items from the request body
    const { customerId, selectedMenuItems } = req.body;

    // Calculate the total price
    const total = await calculateTotalPrice(customerId, selectedMenuItems);

    // Create the order
    const orderService = new OrderService();
    const order = await orderService.create({
        customerId: customerId,
        menuItems: selectedMenuItems,
        totalPrice: total,
    });

    // Create the order items
    const orderItemService = new OrderItemService();
    await orderItemService.bulkCreate(
        selectedMenuItems.map((item) => ({
            orderId: order.id,
            menuItemId: item.id,
            quantity: item.quantity,
        }))
    );

    // Return the order in the response
    res.status(200).json({ order });
}
