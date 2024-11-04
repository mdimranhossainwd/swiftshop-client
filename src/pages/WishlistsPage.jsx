import Card from "../components/card/Card";
import Heading from "../components/shared/Heading";
import useProduct from "../hooks/useProduct";

const WishlistsPage = () => {
  const [product, refetch] = useProduct();
  console.log(product);

  return (
    <div className="container mx-auto my-12">
      <Heading heading="Your Favourite Product" />

      <div className="grid grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-6 gap-1">
        {product?.map((item) => (
          <Card key={item?._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default WishlistsPage;
