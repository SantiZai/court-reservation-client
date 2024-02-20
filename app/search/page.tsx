"use client"

import { useSearchParams } from "next/navigation"

const SearchPage = () => {
    const searchParams = useSearchParams()

    return (
        <section>Hello world</section>
    )
}

export default SearchPage