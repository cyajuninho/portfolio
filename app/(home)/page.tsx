"use client";
import { NextUIProvider } from "@nextui-org/react";
import Header from "../_components/header";
import Home from "../_components/home";

export default function Page() {
    return (
        <NextUIProvider>
            <Header/>
            {/* <Home/> */}
        </NextUIProvider>
    )
}