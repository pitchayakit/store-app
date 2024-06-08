// pages/api/calculate-total.js
import CustomerService from "@/app/services/customer";
import MenuItemService from "@/app/services/menuItem";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { customerId, selectedmenuItems } = req.body;

    // Find the customer by ID
    const customerService = new CustomerService();
    const customer = await customerService.findById(customerId);

    // Find the selected menu items by ID
    const selectedmenuItemIds = selectedmenuItems.map((item) => item.id);

    // Query the database to get the selected menu items
    const menuItemService = new MenuItemService();
    const menuItems = await  menuItemService.findAll({
        where: { id: selectedmenuItemIds },
    });

    let total = 0;
    
    // Calculate the total price
    for (const menuItem of menuItems.data) {
        const selectedmenuItem = selectedmenuItems.find(
            (item) => item.id === menuItem.id
        );

        total += menuItem.price * selectedmenuItem.quantity;
    }

    // Apply a 5% discount if the customer is a member
    if (customer.hasMemberCard) {
        total *= 0.95;
    }

    res.status(200).json({ total });
}
