import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const Newsletter = () => {
  const blogPosts = [
    {
      title: "Scaling Impact Through Technology",
      date: "March 15, 2024",
      excerpt: "How innovative solutions are transforming communities and creating sustainable change.",
    },
    {
      title: "The Future of Digital Inclusion",
      date: "March 10, 2024",
      excerpt: "Exploring pathways to ensure technology serves everyone, everywhere.",
    },
    {
      title: "Building Resilient Systems",
      date: "March 5, 2024",
      excerpt: "Lessons learned in creating infrastructure that withstands challenges.",
    },
  ];

  return (
    <section id="newsletter" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Newsletter Subscription */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Stay Connected</h2>
            <p className="text-xl text-muted-foreground">
              Get updates on our latest initiatives and impact stories
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 text-base bg-background"
            />
            <Button size="lg" className="h-12 bg-primary text-primary-foreground hover:bg-primary/90">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Blog Section */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-10 text-center">Latest Insights</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="p-8 bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <h4 className="text-xl font-bold mb-3">{post.title}</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <Button variant="ghost" className="p-0 h-auto font-semibold hover:underline">
                  Read More
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
