import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-12 w-12 text-purple-600 animate-spin" />
        <p className="text-lg font-medium text-gray-700">Loading...</p>
      </div>
    </div>
  )
}
