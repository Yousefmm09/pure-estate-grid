import { useParams, Link } from "react-router-dom";
import { Bed, Bath, Maximize, Calendar, MapPin, Phone, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { properties, agents } from "@/data/properties";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find(p => p.id === parseInt(id || "0"));
  const agent = property ? agents.find(a => a.id === property.agentId) : null;

  if (!property || !agent) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
            <Link to="/listings">
              <Button>Back to Listings</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Image Gallery */}
          <div className="mb-8">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Property Details */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-4xl font-bold mb-2">{property.title}</h1>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-5 w-5" />
                      <span>{property.address}, {property.city}, {property.state}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-secondary">
                      {property.currency}{property.price.toLocaleString()}
                    </div>
                    <Badge variant="outline" className="mt-2">
                      For {property.status === 'sale' ? 'Sale' : 'Rent'}
                    </Badge>
                  </div>
                </div>

                <div className="flex gap-6 py-6 border-y border-border">
                  <div className="flex items-center gap-2">
                    <Bed className="h-5 w-5 text-muted-foreground" />
                    <span className="font-semibold">{property.beds}</span>
                    <span className="text-muted-foreground">Bedrooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="h-5 w-5 text-muted-foreground" />
                    <span className="font-semibold">{property.baths}</span>
                    <span className="text-muted-foreground">Bathrooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize className="h-5 w-5 text-muted-foreground" />
                    <span className="font-semibold">{property.sqft.toLocaleString()}</span>
                    <span className="text-muted-foreground">sqft</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <span className="font-semibold">{property.yearBuilt}</span>
                    <span className="text-muted-foreground">Built</span>
                  </div>
                </div>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <p className="text-muted-foreground leading-relaxed">{property.description}</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Features & Amenities</h2>
                <div className="grid grid-cols-2 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Agent Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Contact Agent</h3>
                  
                  <div className="mb-6">
                    <img
                      src={agent.photo}
                      alt={agent.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h4 className="text-lg font-semibold text-center">{agent.name}</h4>
                    <p className="text-sm text-muted-foreground text-center">{agent.title}</p>
                    <div className="flex justify-center gap-4 mt-3 text-sm text-muted-foreground">
                      <span>{agent.properties} Properties</span>
                      <span>•</span>
                      <span>{agent.experience}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <a
                      href={`tel:${agent.phone}`}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <Phone className="h-5 w-5 text-secondary" />
                      <span>{agent.phone}</span>
                    </a>
                    <a
                      href={`mailto:${agent.email}`}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <Mail className="h-5 w-5 text-secondary" />
                      <span className="text-sm">{agent.email}</span>
                    </a>
                  </div>

                  <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Schedule Viewing
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
