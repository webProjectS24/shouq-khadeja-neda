import prisma from "@/app/prismadb";
import { NextResponse } from "next/server";

export async function PATCH(request) {
    const body = await request.json();

    const {
        id,
        title,
        description,
        category,
        style,
        inventory,
        size,
        color,
        price,
        images,
        userId,
        store
    } = body;

    try {
        const sold = inventory === 0 ? true : false;

        const updateProduct = await prisma.product.update({
            where: {
                id: id
            },
            data: {
                id,
                title,
                description,
                category,
                style,
                inventory,
                size,
                color,
                price,
                images,
                userId,
                store,
                sold
            }
        });

        return NextResponse.json(updateProduct);
    } catch (error) {
        console.log("Error updating product", error);
        return NextResponse.error();
    }
}