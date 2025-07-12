import Header from '@/components/Header';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Contact</h1>
        <p className="text-muted-foreground">Get in touch with our team.</p>
      </div>
    </div>
  );
};

export default Contact;