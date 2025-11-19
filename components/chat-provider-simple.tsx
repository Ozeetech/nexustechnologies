"use client"

import { useState } from "react"
import SimpleLiveChat from "./simple-live-chat"
import ChatNotificationSimple from "./chat-notification-simple"

export default function ChatProviderSimple() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  const handleOpenChat = () => {
    setIsChatOpen(true)
  }

  return (
    <>
      <SimpleLiveChat />
      {!isChatOpen && <ChatNotificationSimple onOpenChat={handleOpenChat} />}
    </>
  )
}
