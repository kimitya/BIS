"use client"

import { useState } from 'react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Bell, BarChart2, Zap, Droplet, Flame, Sun, Cloud, Thermometer } from 'lucide-react'

const consumptionData = [
  { month: 'Jan', electricity: 400, water: 240, gas: 200 },
  { month: 'Feb', electricity: 300, water: 230, gas: 180 },
  { month: 'Mar', electricity: 350, water: 250, gas: 220 },
  { month: 'Apr', electricity: 280, water: 220, gas: 170 },
  { month: 'May', electricity: 320, water: 230, gas: 190 },
  { month: 'Jun', electricity: 380, water: 270, gas: 210 },
]

const savingsData = [
  { month: 'Jan', savings: 20 },
  { month: 'Feb', savings: 35 },
  { month: 'Mar', savings: 45 },
  { month: 'Apr', savings: 60 },
  { month: 'May', savings: 75 },
  { month: 'Jun', savings: 90 },
]

const applianceData = [
  { name: 'Refrigerator', efficiency: 90 },
  { name: 'Washing Machine', efficiency: 85 },
  { name: 'Dishwasher', efficiency: 80 },
  { name: 'Air Conditioner', efficiency: 75 },
  { name: 'Water Heater', efficiency: 70 },
]

export default function Component() {
  const [activeTab, setActiveTab] = useState('electricity')

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Resource Consumption Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Electricity Usage</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">380 kWh</div>
            <p className="text-xs text-muted-foreground">+4.5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Water Usage</CardTitle>
            <Droplet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">270 m³</div>
            <p className="text-xs text-muted-foreground">+2.5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Gas Usage</CardTitle>
            <Flame className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">210 m³</div>
            <p className="text-xs text-muted-foreground">-1.2% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Consumption Over Time</CardTitle>
          <CardDescription>Monthly usage for electricity, water, and gas</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="electricity">Electricity</TabsTrigger>
              <TabsTrigger value="water">Water</TabsTrigger>
              <TabsTrigger value="gas">Gas</TabsTrigger>
            </TabsList>
            <TabsContent value={activeTab}>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={consumptionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey={activeTab} stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Consumption Savings</CardTitle>
            <CardDescription>Monthly savings after following recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={savingsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="savings" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Appliance Efficiency Comparison</CardTitle>
            <CardDescription>Efficiency ratings of your current appliances</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={applianceData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Legend />
                <Bar dataKey="efficiency" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recommendations</CardTitle>
            <CardDescription>Personalized advice to reduce consumption</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                <span>Use your washing machine during off-peak hours (10 PM - 6 AM) to save on electricity costs.</span>
              </li>
              <li className="flex items-center gap-2">
                <Droplet className="h-4 w-4" />
                <span>Consider installing a low-flow showerhead to reduce water consumption.</span>
              </li>
              <li className="flex items-center gap-2">
                <Flame className="h-4 w-4" />
                <span>Lower your water heater temperature to 120°F (49°C) to save on gas consumption.</span>
              </li>
              <li className="flex items-center gap-2">
                <Thermometer className="h-4 w-4" />
                <span>Upgrade to a smart thermostat for better control over your heating and cooling.</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Weather Impact</CardTitle>
            <CardDescription>How weather affects your consumption</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Sun className="h-6 w-6 text-yellow-500" />
                <span className="text-lg font-semibold">Sunny, 28°C</span>
              </div>
              <span className="text-sm text-muted-foreground">Expected impact: Moderate</span>
            </div>
            <p className="text-sm mb-4">
              The warm weather may increase your air conditioning usage. Consider using fans and natural ventilation when possible to reduce electricity consumption.
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span>Electricity</span>
                <span className="text-yellow-500">+15% expected increase</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Water</span>
                <span className="text-green-500">-5% expected decrease</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Gas</span>
                <span className="text-green-500">-10% expected decrease</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
          <CardDescription>Customize your dashboard and notifications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="budget">Monthly Budget</Label>
              <Input id="budget" placeholder="Enter your monthly budget" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="brand-preference">Preferred Appliance Brand</Label>
              <Select>
                <SelectTrigger id="brand-preference">
                  <SelectValue placeholder="Select a brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="samsung">Samsung</SelectItem>
                  <SelectItem value="lg">LG</SelectItem>
                  <SelectItem value="whirlpool">Whirlpool</SelectItem>
                  <SelectItem value="ge">GE</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="notifications" />
              <Label htmlFor="notifications">Enable push notifications</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="eco-mode" />
              <Label htmlFor="eco-mode">Activate eco-friendly mode</Label>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}