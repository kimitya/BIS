import { useState } from 'react'
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Users, ShoppingCart, TrendingUp, Package, Zap, Droplet, Flame } from 'lucide-react'

const salesData = [
  { month: 'Jan', sales: 4000, recommendations: 120 },
  { month: 'Feb', sales: 3000, recommendations: 98 },
  { month: 'Mar', sales: 5000, recommendations: 150 },
  { month: 'Apr', sales: 2780, recommendations: 80 },
  { month: 'May', sales: 1890, recommendations: 60 },
  { month: 'Jun', sales: 2390, recommendations: 85 },
]

const productData = [
  { name: 'Refrigerators', value: 400 },
  { name: 'Washing Machines', value: 300 },
  { name: 'Dishwashers', value: 200 },
  { name: 'Air Conditioners', value: 278 },
  { name: 'Water Heaters', value: 189 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

export default function Component() {
  const [activeTab, setActiveTab] = useState('sales')

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Partner Company Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18,549</div>
            <p className="text-xs text-muted-foreground">+2.5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          
          <CardContent>
            <div className="text-2xl font-bold">$89,234</div>
            <p className="text-xs text-muted-foreground">+14.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between  space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2%</div>
            <p className="text-xs text-muted-foreground">+0.3% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recommendations</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">593</div>
            <p className="text-xs text-muted-foreground">+5.1% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Sales and Recommendations</CardTitle>
            <CardDescription>Monthly sales and recommendation data</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="sales">Sales</TabsTrigger>
                <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
              </TabsList>
              <TabsContent value={activeTab}>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={salesData}>
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
        <Card>
          <CardHeader>
            <CardTitle>Product Distribution</CardTitle>
            <CardDescription>Breakdown of products sold</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={productData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {productData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>API Integration</CardTitle>
            <CardDescription>Manage your API access and settings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="api-key">API Key</Label>
                <Input id="api-key" value="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" readOnly />
              </div>
              <div>
                <Label htmlFor="webhook-url">Webhook URL</Label>
                <Input id="webhook-url" placeholder="https://your-website.com/webhook" />
              </div>
              <div>
                <Label htmlFor="data-type">Data Type</Label>
                <Select>
                  <SelectTrigger id="data-type">
                    <SelectValue placeholder="Select data type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consumption">Consumption Data</SelectItem>
                    <SelectItem value="recommendations">Recommendations</SelectItem>
                    <SelectItem value="analytics">Analytics</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button>Update API Settings</Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Custom Promotions</CardTitle>
            <CardDescription>Create promotions based on system recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="promotion-name">Promotion Name</Label>
                <Input id="promotion-name" placeholder="Summer Energy Savings" />
              </div>
              <div>
                <Label htmlFor="promotion-description">Description</Label>
                <Textarea id="promotion-description" placeholder="Get 20% off on energy-efficient air conditioners" />
              </div>
              <div>
                <Label htmlFor="target-audience">Target Audience</Label>
                <Select>
                  <SelectTrigger id="target-audience">
                    <SelectValue placeholder="Select target audience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high-consumption">High Consumption Users</SelectItem>
                    <SelectItem value="eco-friendly">Eco-Friendly Users</SelectItem>
                    <SelectItem value="new-users">New Users</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button>Create Promotion</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Inventory Integration</CardTitle>
          <CardDescription>Sync your inventory with our recommendation system</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="product-category">Product Category</Label>
                <Select>
                  <SelectTrigger id="product-category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="refrigerators">Refrigerators</SelectItem>
                    <SelectItem value="washing-machines">Washing Machines</SelectItem>
                    <SelectItem value="air-conditioners">Air Conditioners</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="product-name">Product Name</Label>
                <Input id="product-name" placeholder="Energy Star Refrigerator X100" />
              </div>
              <div>
                <Label htmlFor="stock-quantity">Stock Quantity</Label>
                <Input id="stock-quantity" type="number" placeholder="100" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="energy-rating">Energy Rating</Label>
                <Input id="energy-rating" placeholder="A++" />
              </div>
              <div>
                <Label htmlFor="price">Price</Label>
                <Input id="price" type="number" placeholder="999.99" />
              </div>
              <div>
                <Label htmlFor="efficiency-score">Efficiency Score</Label>
                <Input id="efficiency-score" type="number" placeholder="95" />
              </div>
            </div>
            <Button>Add to Inventory</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}