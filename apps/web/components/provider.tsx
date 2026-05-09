"use client";

import * as React from "react"
import { ThemeProvider } from "./theme-provider";
import { ConvexProviders } from "./convex-providers";
import { ClerkProvider } from '@clerk/nextjs'





export function Providers({ children }: {children: React.ReactNode }) {
    return (
        
        <ThemeProvider>
            <ClerkProvider
                taskUrls={{
                    "choose-organization": "/org-selection",
                }}
            >
                <ConvexProviders>
                    {children}
                </ConvexProviders>
            </ClerkProvider>
        </ThemeProvider>
        
    )
}
