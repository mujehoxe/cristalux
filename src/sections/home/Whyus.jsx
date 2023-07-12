import Why from "../../components/home/Why";
import whyus01 from '../../assets/imgs/whyus01.png'
import whyus02 from '../../assets/imgs/whyus02.png'
import whyus03 from '../../assets/imgs/whyus03.png'

const MyComponent = () => {
  return (
    <section className="py-10">
      <Why
        image={whyus01}
        title={"stylish chairs"}
        paragraph={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio malesuada at condimentum adipiscing iaculis semper."
        }
        link={"products"}
        linkText={"view more >"}
      />
      <Why
        image={whyus02}
        title={"Frame"}
        paragraph={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio malesuada at condimentum adipiscing iaculis semper."
        }
        link={"products"}
        linkText={"view more >"}
        flexRowReverse={"row-reverse"}
      />
      <Why
        image={whyus03}
        title={"contemporary lamps"}
        paragraph={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio malesuada at condimentum adipiscing iaculis semper."
        }
        link={"products"}
        linkText={"view more >"}
        
      />
    </section>
  );
};

export default MyComponent;
