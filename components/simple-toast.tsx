"use client"

import { useState, useEffect, createContext, useContext, type ReactNode } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Toast {
  id: string
  title: string
  description?: string
  type?: "default" | "success" | "error" | "warning"
  duration?: number
}

interface ToastContextType {
  toasts: Toast[]
  addToast: (toast: Omit<Toast, "id">) => void
  removeToast: (id: string) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = (toast: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substring(2, 9)
    setToasts((prev) => [...prev, { id, duration: 5000, type: "default", ...toast }])
  }

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}

function ToastContainer() {
  const { toasts, removeToast } = useToast()

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
      ))}
    </div>
  )
}

function ToastItem({ toast, onClose }: { toast: Toast; onClose: () => void }) {
  useEffect(() => {
    if (toast.duration) {
      const timer = setTimeout(() => {
        onClose()
      }, toast.duration)
      return () => clearTimeout(timer)
    }
  }, [toast.duration, onClose])

  const getBgColor = () => {
    switch (toast.type) {
      case "success":
        return "bg-green-100 border-green-500 text-green-800"
      case "error":
        return "bg-red-100 border-red-500 text-red-800"
      case "warning":
        return "bg-yellow-100 border-yellow-500 text-yellow-800"
      default:
        return "bg-white border-gray-200 text-gray-800"
    }
  }

  return (
    <div
      className={`w-72 rounded-lg border shadow-lg p-4 animate-in slide-in-from-right-full ${getBgColor()}`}
      role="alert"
    >
      <div className="flex justify-between items-start">
        <div>
          {toast.title && <h4 className="font-medium text-sm">{toast.title}</h4>}
          {toast.description && <p className="text-xs mt-1">{toast.description}</p>}
        </div>
        <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
