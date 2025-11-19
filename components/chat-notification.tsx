"use client"

import { useState, useEffect } from "react"
import { X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ChatNotificationProps {
  onOpenChat: () => void
}

export default function ChatNotification({ onOpenChat }: ChatNotificationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Show notification after 10 seconds if not dismissed
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true)
      }
    }, 10000)

    return () => clearTimeout(timer)
  }, [isDismissed])

  const handleDismiss = () => {
    setIsVisible(false)
    setIsDismissed(true)
  }

  const handleOpenChat = () => {
    setIsVisible(false)
    onOpenChat()
  }

  if (!isVisible || isDismissed) return null

  return (
    <Card className="fixed bottom-24 right-6 z-40 w-72 shadow-lg border-0 bg-white animate-in slide-in-from-bottom-2">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
            <MessageCircle className="h-5 w-5 text-purple-600" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-sm text-slate-900 mb-1">Need help?</h4>
            <p className="text-xs text-gray-600 mb-3">
              Hi! I'm Sarah from NEXUS TECHNOLOGIES. Have any questions about our services?
            </p>
            <div className="flex gap-2">
              <Button
                size="sm"
                className="bg-purple-600 hover:bg-purple-700 text-xs px-3 py-1 h-7"
                onClick={handleOpenChat}
              >
                Start Chat
              </Button>
              <Button size="sm" variant="ghost" className="text-xs px-3 py-1 h-7" onClick={handleDismiss}>
                Maybe later
              </Button>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 text-gray-400 hover:text-gray-600 flex-shrink-0"
            onClick={handleDismiss}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
