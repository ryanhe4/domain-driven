'use client'

import {
    QueryClientProvider,
} from '@tanstack/react-query'
import * as React from 'react'
import {getQueryClient} from "@/utils/get-query-client";


export function QueryProvider(props: { children: React.ReactNode }) {
    // NOTE: Avoid useState when initializing the query client if you don't
    //       have a suspense boundary between this and the code that may
    //       suspend because React will throw away the client on the initial
    //       render if it suspends and there is no boundary
    const queryClient = getQueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            {props.children}
        </QueryClientProvider>
    )
}