import Header from '@/components/Header';

const Work = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Work</h1>
        <p className="text-muted-foreground">Our work portfolio will be displayed here.</p>
      </div>
    </div>
  );
};

export default Work;