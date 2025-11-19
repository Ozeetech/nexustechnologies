"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Something went wrong</h1>
      <p className="text-xl text-gray-600 max-w-md mb-8">
        We apologize for the inconvenience. Our team has been notified and is working to fix the issue.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={reset} className="bg-purple-600 hover:bg-purple-700">
          Try again
        </Button>
        <Link href="/">
          <Button variant="outline">Return to Homepage</Button>
        </Link>
      </div>
    </div>
  )
}
