"use client";

import * as React from "react"
import { ThemeProvider } from "./theme-provider";
import { ConvexProviders } from "./convex-providers";




export function Providers({ children }: {children: React.ReactNode }) {
    return (
        
        <ThemeProvider>
            <ConvexProviders>
                {children}
            </ConvexProviders>
        </ThemeProvider>
        
    )
}