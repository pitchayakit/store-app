import { calculateTotalPrice } from "../../src/pages/api/submit-order";

describe("calculateTotalPrice function", () => {
    it("should return the correct total price", async () => {
        const customerId = 1; // For non-member
        const items = [
            { id: 1, quantity: 2 }, //Red set
            { id: 2, quantity: 1 }, //Green set
            { id: 3, quantity: 4 }, //Blue set
        ];
        const result = await calculateTotalPrice(customerId, items);
        expect(result).toBe(260);
    });

    it("should return 0 if no items are provided", async () => {
        const customerId = 1; // For non-member
        const items = []; // No items
        const result = await calculateTotalPrice(customerId, items);
        expect(result).toBe(0);
    });

    it("should throw an error if items is not an array", async () => {
        const customerId = 1; // For non-member
        const items = "not an array";
        
        expect(async () => await calculateTotalPrice(customerId, items)).rejects.toThrow(
            "Items must be an array"
        );
    });
});
