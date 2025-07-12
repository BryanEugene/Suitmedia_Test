import Header from '@/components/Header';
import Banner from '@/components/Banner';
import PostList from '@/components/PostList';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Banner />
      <PostList />
    </div>
  );
};

export default Index;
