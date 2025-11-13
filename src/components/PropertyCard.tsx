import { Link } from "react-router-dom";
import { Bed, Bath, Maximize, MapPin } from "lucide-react";
import { Property } from "@/data/properties";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Link to={`/property/${property.id}`}>
      <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground font-semibold">
            {property.currency}{property.price.toLocaleString()}
          </Badge>
          <Badge variant="outline" className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm">
            For {property.status === 'sale' ? 'Sale' : 'Rent'}
          </Badge>
        </div>
        
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
            {property.title}
          </h3>
          
          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
            <MapPin className="h-4 w-4" />
            <span>{property.address}, {property.city}</span>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-3">
            <div className="flex items-center gap-1">
              <Bed className="h-4 w-4" />
              <span>{property.beds} Beds</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="h-4 w-4" />
              <span>{property.baths} Baths</span>
            </div>
            <div className="flex items-center gap-1">
              <Maximize className="h-4 w-4" />
              <span>{property.sqft.toLocaleString()} sqft</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PropertyCard;
