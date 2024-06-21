'use client'

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <html>
            <body>
                <div className="grid h-screen place-content-center bg-white px-4">
                    <h1 className="uppercase text-5xl tracking-widest text-gray-500">Something went wrong!</h1>
                    <a href="/">
                        <button onClick={() => reset()}>Try again</button></a>
                </div>
            </body>
        </html>
    )
}