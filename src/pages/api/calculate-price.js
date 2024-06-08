// pages/api/calculate-total.js
import { calculateTotalPrice } from "@/pages/api/submit-order";

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }
    
    // Get the customer ID and selected menu items from the request body
    const { customerId, selectedmenuItems } = req.body;

    // Calculate the total price
    const total = await calculateTotalPrice(customerId, selectedmenuItems);
    
    res.status(200).json({ total });
}
