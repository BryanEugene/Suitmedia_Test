import Header from '@/components/Header';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">About</h1>
        <p className="text-muted-foreground">Learn more about our company and values.</p>
      </div>
    </div>
  );
};

export default About;