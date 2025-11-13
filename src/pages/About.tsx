import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">About Premier Properties</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Your trusted partner in real estate since 2010, helping thousands find their dream homes
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2010, Premier Properties has grown from a small local agency to one of the most trusted names in real estate. Our journey began with a simple mission: to make the process of buying and selling homes transparent, efficient, and rewarding for everyone involved.
                </p>
                <p>
                  Over the years, we've helped thousands of families find their perfect homes, and we've built lasting relationships based on trust, integrity, and exceptional service. Our team of experienced professionals brings decades of combined expertise in residential and commercial real estate.
                </p>
                <p>
                  Today, we continue to innovate and adapt to the changing real estate landscape while maintaining the personal touch and dedication that has always defined our service. We're not just about transactions; we're about helping people achieve their dreams of homeownership.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                  <p className="text-muted-foreground">
                    We believe in honest, transparent dealings in every transaction. Your trust is our most valuable asset.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                  <p className="text-muted-foreground">
                    We strive for excellence in every aspect of our service, from property selection to client communication.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Community</h3>
                  <p className="text-muted-foreground">
                    We're committed to giving back to the communities we serve and helping them thrive.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">2,500+</div>
                <div className="text-muted-foreground">Homes Sold</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">15+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">98%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">50+</div>
                <div className="text-muted-foreground">Expert Agents</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
