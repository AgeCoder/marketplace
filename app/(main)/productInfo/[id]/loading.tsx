import { Skeleton } from "@/components/ui/skeleton"

const loading = () => {
    return (
        <>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div className="h-80 rounded-lg bg-gray-200 lg:col-span-2">
                <Skeleton className="w-full h-[320px]" />

            </div>
            <div className="h-80 rounded-lg bg-gray-200">
                <Skeleton className="w-full h-[320px] " />
            </div>
            </div>
            <div className="h-52 rounded-lg bg-gray-200 w-full animate-pulse mt-5">
            </div>
        </>
    )
}

export default loading
