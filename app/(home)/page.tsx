"use client";
import { NextUIProvider } from "@nextui-org/react";
import Header from "../_components/header";

export default function Home() {
    return (
        <NextUIProvider>
            <Header/>
        </NextUIProvider>
    )
}