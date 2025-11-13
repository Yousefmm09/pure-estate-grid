import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import { agents } from "@/data/properties";

const Agents = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Our Expert Agents</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet our team of dedicated real estate professionals ready to help you find your perfect home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent) => (
              <Card key={agent.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={agent.photo}
                    alt={agent.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{agent.name}</h3>
                  <p className="text-muted-foreground mb-4">{agent.title}</p>
                  
                  <div className="flex justify-between text-sm text-muted-foreground mb-6">
                    <span>{agent.properties} Properties</span>
                    <span>{agent.experience} Experience</span>
                  </div>

                  <div className="space-y-2">
                    <a
                      href={`tel:${agent.phone}`}
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      {agent.phone}
                    </a>
                    <a
                      href={`mailto:${agent.email}`}
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      {agent.email}
                    </a>
                  </div>

                  <Button className="w-full mt-6 bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Contact Agent
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Agents;
