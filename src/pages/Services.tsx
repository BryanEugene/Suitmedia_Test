import Header from '@/components/Header';

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Services</h1>
        <p className="text-muted-foreground">Discover our range of professional services.</p>
      </div>
    </div>
  );
};

export default Services;