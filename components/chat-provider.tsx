"use client"

import { useState } from "react"
import LiveChat from "./live-chat"
import ChatNotification from "./chat-notification"

export default function ChatProvider() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  const handleOpenChat = () => {
    setIsChatOpen(true)
  }

  return (
    <>
      <LiveChat />
      {!isChatOpen && <ChatNotification onOpenChat={handleOpenChat} />}
    </>
  )
}
