"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BarChart3,
  Bell,
  Calendar,
  CreditCard,
  Download,
  HelpCircle,
  LifeBuoy,
  MessageSquare,
  Settings,
  Shield,
  Ticket,
  User,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ReliableImage from "@/components/reliable-image"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const supportTickets = [
    {
      id: "T-1234",
      title: "Network connectivity issues",
      status: "Open",
      priority: "High",
      updated: "2 hours ago",
    },
    {
      id: "T-1233",
      title: "Email configuration problem",
      status: "In Progress",
      priority: "Medium",
      updated: "1 day ago",
    },
    {
      id: "T-1232",
      title: "Software license renewal",
      status: "Resolved",
      priority: "Low",
      updated: "3 days ago",
    },
  ]

  const upcomingMeetings = [
    {
      id: 1,
      title: "Weekly IT Security Review",
      date: "June 15, 2025",
      time: "10:00 AM - 11:00 AM",
      attendees: 4,
    },
    {
      id: 2,
      title: "Cloud Migration Planning",
      date: "June 17, 2025",
      time: "2:00 PM - 3:30 PM",
      attendees: 6,
    },
  ]

  const recentInvoices = [
    {
      id: "INV-2024-056",
      service: "Managed IT Services",
      amount: "£1,950.00",
      status: "Paid",
      date: "June 1, 2025",
    },
    {
      id: "INV-2024-055",
      service: "Cloud Storage (May)",
      amount: "£580.00",
      status: "Pending",
      date: "May 31, 2025",
    },
    {
      id: "INV-2024-054",
      service: "Security Assessment",
      amount: "£950.00",
      status: "Paid",
      date: "May 15, 2025",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <h1 className="text-xl font-bold text-gray-900">Client Dashboard</h1>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                  3
                </span>
              </Button>
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-medium">
                  JD
                </div>
                <span className="text-sm font-medium">John Doe</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[240px_1fr]">
          {/* Sidebar */}
          <div className="space-y-6">
            <div className="rounded-lg border bg-white shadow-sm">
              <div className="p-6">
                <h2 className="mb-4 text-lg font-medium">Navigation</h2>
                <nav className="space-y-1">
                  <Button
                    variant={activeTab === "overview" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("overview")}
                  >
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Overview
                  </Button>
                  <Button
                    variant={activeTab === "tickets" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("tickets")}
                  >
                    <Ticket className="mr-2 h-4 w-4" />
                    Support Tickets
                  </Button>
                  <Button
                    variant={activeTab === "invoices" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("invoices")}
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    Invoices
                  </Button>
                  <Button
                    variant={activeTab === "meetings" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("meetings")}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Meetings
                  </Button>
                  <Button
                    variant={activeTab === "documents" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("documents")}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Documents
                  </Button>
                </nav>
              </div>
              <div className="border-t p-6">
                <h2 className="mb-4 text-lg font-medium">Account</h2>
                <nav className="space-y-1">
                  <Button variant="ghost" className="w-full justify-start">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                  <Link href="/">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      Sign out
                    </Button>
                  </Link>
                </nav>
              </div>
            </div>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Need Help?</CardTitle>
                <CardDescription>Our support team is here for you 24/7</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative h-32 rounded-lg overflow-hidden mb-4">
                  <ReliableImage
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80"
                    alt="NEXUS TECHNOLOGIES support team"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                    <p className="text-white text-sm font-medium">UK-based technical support</p>
                  </div>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact Support
                </Button>
                <div className="flex justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <LifeBuoy className="mr-1 h-3 w-3" />
                    <span>Help Center</span>
                  </div>
                  <div className="flex items-center">
                    <HelpCircle className="mr-1 h-3 w-3" />
                    <span>FAQs</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            {/* Welcome Card */}
            <Card className="border-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">Welcome back, John!</h2>
                    <p className="mt-1 text-purple-100">
                      Your IT systems are running smoothly. Last security scan: 2 hours ago
                    </p>
                  </div>
                  <div className="hidden md:block">
                    <Shield className="h-12 w-12 text-purple-200" />
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="rounded-lg bg-white/10 p-3">
                    <div className="text-sm text-purple-100">Active Tickets</div>
                    <div className="text-2xl font-bold">2</div>
                  </div>
                  <div className="rounded-lg bg-white/10 p-3">
                    <div className="text-sm text-purple-100">Server Uptime</div>
                    <div className="text-2xl font-bold">99.9%</div>
                  </div>
                  <div className="rounded-lg bg-white/10 p-3">
                    <div className="text-sm text-purple-100">Next Invoice</div>
                    <div className="text-2xl font-bold">June 30</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support Tickets */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Support Tickets</CardTitle>
                  <CardDescription>Manage your active support requests</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  New Ticket
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {supportTickets.map((ticket) => (
                    <div
                      key={ticket.id}
                      className="flex items-center justify-between rounded-lg border p-4 hover:bg-gray-50"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-gray-900">{ticket.id}</span>
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              ticket.status === "Open"
                                ? "bg-yellow-100 text-yellow-800"
                                : ticket.status === "In Progress"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-green-100 text-green-800"
                            }`}
                          >
                            {ticket.status}
                          </span>
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              ticket.priority === "High"
                                ? "bg-red-100 text-red-800"
                                : ticket.priority === "Medium"
                                  ? "bg-orange-100 text-orange-800"
                                  : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {ticket.priority}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700">{ticket.title}</p>
                        <p className="text-xs text-gray-500">Updated {ticket.updated}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Meetings and Invoices */}
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Meetings</CardTitle>
                  <CardDescription>Scheduled consultations with our team</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingMeetings.map((meeting) => (
                      <div key={meeting.id} className="rounded-lg border p-4 hover:bg-gray-50">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-gray-900">{meeting.title}</h4>
                            <span className="text-xs text-gray-500">{meeting.attendees} attendees</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Calendar className="h-4 w-4" />
                            <span>{meeting.date}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Clock className="h-4 w-4" />
                            <span>{meeting.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Recent Invoices</CardTitle>
                    <CardDescription>Your billing history</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentInvoices.map((invoice) => (
                      <div
                        key={invoice.id}
                        className="flex items-center justify-between rounded-lg border p-4 hover:bg-gray-50"
                      >
                        <div className="space-y-1">
                          <p className="font-medium text-gray-900">{invoice.service}</p>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <span>{invoice.id}</span>
                            <span>•</span>
                            <span>{invoice.date}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">{invoice.amount}</p>
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              invoice.status === "Paid"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {invoice.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
