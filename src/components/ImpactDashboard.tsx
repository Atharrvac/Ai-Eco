import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Leaf, Droplets, Zap, TreePine, Users, TrendingUp } from "lucide-react";

const impactStats = [
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "CO₂ Prevented",
    value: "2,450",
    unit: "kg",
    description: "Equivalent to planting 45 trees",
    color: "text-success",
    bgColor: "bg-gradient-primary"
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Water Saved",
    value: "15,680",
    unit: "liters",
    description: "Clean water preserved",
    color: "text-blue-500",
    bgColor: "bg-gradient-secondary"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Energy Recovered",
    value: "890",
    unit: "kWh",
    description: "From recycled materials",
    color: "text-yellow-500",
    bgColor: "bg-gradient-reward"
  },
  {
    icon: <TreePine className="w-8 h-8" />,
    title: "Landfill Diverted",
    value: "1,234",
    unit: "kg",
    description: "Waste properly recycled",
    color: "text-green-600",
    bgColor: "bg-gradient-primary"
  }
];

const cityLeaderboard = [
  { rank: 1, city: "Bangalore", recycled: "12.5 tons", badge: "🏆" },
  { rank: 2, city: "Mumbai", recycled: "11.2 tons", badge: "🥈" },
  { rank: 3, city: "Delhi", recycled: "10.8 tons", badge: "🥉" },
  { rank: 4, city: "Chennai", recycled: "9.4 tons", badge: "⭐" },
  { rank: 5, city: "Pune", recycled: "8.7 tons", badge: "⭐" }
];

const monthlyGoals = [
  { category: "Electronics", current: 75, target: 100, color: "bg-primary" },
  { category: "Batteries", current: 45, target: 60, color: "bg-secondary" },
  { category: "Cables", current: 90, target: 80, color: "bg-success" },
  { category: "Mobiles", current: 32, target: 50, color: "bg-warning" }
];

export const ImpactDashboard = () => {
  return (
    <section id="impact" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Environmental{" "}
            <span className="">
              Impact
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the real difference you're making. Every piece of e-waste recycled 
            contributes to a cleaner, greener planet for future generations.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {impactStats.map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-gradient-card hover:shadow-medium transition-all">
              <div className={`w-16 h-16 ${stat.bgColor} rounded-full mx-auto mb-4 flex items-center justify-center text-white`}>
                {stat.icon}
              </div>
              <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                {stat.value}
                <span className="text-lg ml-1">{stat.unit}</span>
              </div>
              <h3 className="font-semibold mb-2">{stat.title}</h3>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Monthly Goals */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              Monthly Recycling Goals
            </h3>
            
            <div className="space-y-6">
              {monthlyGoals.map((goal, index) => (
                <Card key={index} className="p-6 bg-gradient-card">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">{goal.category}</h4>
                    <Badge variant={goal.current >= goal.target ? "default" : "outline"}>
                      {goal.current}/{goal.target} items
                    </Badge>
                  </div>
                  <Progress 
                    value={(goal.current / goal.target) * 100} 
                    className="h-3 mb-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Progress: {Math.round((goal.current / goal.target) * 100)}%</span>
                    <span>{goal.target - goal.current} items to go</span>
                  </div>
                </Card>
              ))}
            </div>

            {/* Personal Achievements */}
            <Card className="p-6 mt-6 bg-gradient-to-r from-primary-light to-secondary-light border border-primary/20">
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Your Eco Journey
              </h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">15</div>
                  <div className="text-sm text-muted-foreground">Days Active</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">23</div>
                  <div className="text-sm text-muted-foreground">Items Recycled</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-success">5</div>
                  <div className="text-sm text-muted-foreground">Friends Invited</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-warning">98%</div>
                  <div className="text-sm text-muted-foreground">Eco Score</div>
                </div>
              </div>
            </Card>
          </div>

          {/* City Leaderboard & Community */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Users className="w-6 h-6 text-secondary" />
              City Leaderboard
            </h3>
            
            <Card className="p-6 mb-6 bg-gradient-card">
              <div className="space-y-4">
                {cityLeaderboard.map((city) => (
                  <div key={city.rank} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{city.badge}</div>
                      <div>
                        <div className="font-semibold">{city.city}</div>
                        <div className="text-sm text-muted-foreground">Rank #{city.rank}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-primary">{city.recycled}</div>
                      <div className="text-xs text-muted-foreground">this month</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Environmental Impact Visualization */}
            <Card className="p-6 bg-gradient-hero text-white">
              <h4 className="font-semibold text-lg mb-4">This Month's Impact</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>CO₂ Saved by Community</span>
                  <span className="font-bold">15.2 tons</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Equivalent Trees Planted</span>
                  <span className="font-bold">284 trees 🌳</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Landfill Space Saved</span>
                  <span className="font-bold">45 cubic meters</span>
                </div>
                <div className="pt-2 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-2xl mb-1">🌍</div>
                    <p className="text-sm opacity-90">
                      Together we're creating a cleaner planet!
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};