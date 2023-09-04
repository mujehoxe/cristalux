import Why from "../../components/home/Why";
import whyus01 from '../../assets/imgs/whyus01.jpg'
import whyus02 from '../../assets/imgs/whyus02.jpg'
import whyus03 from '../../assets/imgs/whyus03.jpg'

const MyComponent = () => {
  return (
    <section className="pt-5">
      <Why
        image={whyus01}
        title={"CHAISES STYLISH"}
        paragraph={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio malesuada at condimentum adipiscing iaculis semper."
        }
        link={"products"}
        linkText={"view more >"}
      />
      <Why
        image={whyus02}
        title={"CADRE"}
        paragraph={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio malesuada at condimentum adipiscing iaculis semper."
        }
        link={"products"}
        linkText={"view more >"}
        flexRowReverse={"row-reverse"}
      />
      <Why
        image={whyus03}
        title={"LAMPES CONTEMPORAINES"}
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
