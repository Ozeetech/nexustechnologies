"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Minimize2, Maximize2, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { useToast } from "@/components/simple-toast"

interface Message {
  id: string
  text: string
  sender: "user" | "agent" | "bot"
  timestamp: Date
  senderName?: string
}

export default function SimpleLiveChat() {
  const { addToast } = useToast()
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! Welcome to NEXUS TECHNOLOGIES. I'm Sarah, your virtual assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
      senderName: "Sarah (AI Assistant)",
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate bot/agent response
    setTimeout(() => {
      const responses = [
        "Thank you for your message! Let me connect you with one of our specialists who can help you with your inquiry.",
        "I'd be happy to help you with that. Can you provide more details about your project requirements?",
        "That's a great question! Our team has extensive experience in that area. Would you like to schedule a consultation?",
        "I understand your needs. Let me get you connected with our technical team who can provide detailed information.",
        "Thanks for reaching out! Our business hours are Monday-Friday 8AM-7PM CST. An agent will respond shortly.",
      ]

      const randomResponse = responses[Math.floor(Math.random() * responses.length)]

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        sender: Math.random() > 0.5 ? "bot" : "agent",
        timestamp: new Date(),
        senderName: Math.random() > 0.5 ? "Sarah (AI Assistant)" : "Alex Thompson (Support Agent)",
      }

      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)

      // Show a toast notification when agent responds
      if (botMessage.sender === "agent") {
        addToast({
          title: "New message from support",
          description: "An agent has responded to your inquiry",
          type: "success",
          duration: 3000,
        })
      }
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-purple-600 hover:bg-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Open live chat</span>
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-80 h-96 shadow-2xl border border-gray-200 bg-white">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-xs">NT</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="text-sm font-semibold">NEXUS Support</h3>
                <p className="text-xs opacity-90">Online • Typically replies in minutes</p>
              </div>
            </div>
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white hover:bg-white/20"
                onClick={() => setIsMinimized(!isMinimized)}
              >
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white hover:bg-white/20"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Chat Content */}
          {!isMinimized && (
            <>
              <div className="h-64 overflow-y-auto p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {message.sender !== "user" && (
                        <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="h-4 w-4 text-purple-600" />
                        </div>
                      )}
                      <div className={`max-w-[70%] ${message.sender === "user" ? "order-first" : ""}`}>
                        {message.sender !== "user" && message.senderName && (
                          <p className="text-xs text-gray-500 mb-1">{message.senderName}</p>
                        )}
                        <div
                          className={`rounded-lg px-3 py-2 text-sm ${
                            message.sender === "user" ? "bg-purple-600 text-white ml-auto" : "bg-gray-100 text-gray-900"
                          }`}
                        >
                          {message.text}
                        </div>
                        <p className="text-xs text-gray-400 mt-1">{formatTime(message.timestamp)}</p>
                      </div>
                      {message.sender === "user" && (
                        <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="h-4 w-4 text-blue-600" />
                        </div>
                      )}
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex gap-3 justify-start">
                      <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="h-4 w-4 text-purple-600" />
                      </div>
                      <div className="bg-gray-100 rounded-lg px-3 py-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 text-sm"
                    disabled={isTyping}
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="icon"
                    className="bg-purple-600 hover:bg-purple-700 flex-shrink-0"
                    disabled={!inputMessage.trim() || isTyping}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">We typically reply in a few minutes</p>
              </div>
            </>
          )}
        </Card>
      )}
    </>
  )
}
