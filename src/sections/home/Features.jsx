import Feature from "../../components/home/Feature"
import onlineShop from '../../assets/imgs/onlineShop.png'
import delivery from "../../assets/imgs/delivery.png";

const Features = () => {
  return (
    <section className="py-10">
      <div className="md:grid md:grid-cols-3 md:justify-center md:items-center">
        <Feature
          image={onlineShop}
          title={"shop online with us"}
          paragraph={
            "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Consequat Dolor Odio Odio Malesuada At Condimentum Adipiscing Iaculis Semper."
          }
        />
        <Feature
          image={delivery}
          title={"delivery 58 wilaya"}
          paragraph={
            "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Consequat Dolor Odio Odio Malesuada At Condimentum Adipiscing Iaculis Semper."
          }
        />
        <Feature
          image={delivery}
          title={"delivery 58 wilaya"}
          paragraph={
            "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Consequat Dolor Odio Odio Malesuada At Condimentum Adipiscing Iaculis Semper."
          }
        />
      </div>
    </section>
  );
}

export default Features