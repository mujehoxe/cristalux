import Why from "../../components/home/Why";
import whyus01 from '../../assets/imgs/whyus01.jpg'
import whyus02 from '../../assets/imgs/whyus02.jpg'
import whyus03 from '../../assets/imgs/whyus03.jpg'
import { useTranslation } from "react-i18next";

const MyComponent = () => {
  const { t } = useTranslation();

  return (
    <section  className="pt-5">
      <Why
        image={whyus01}
        title={t('whyUs.chairs.title')}
        paragraph={t('whyUs.chairs.description')}
        link={"products"}
        linkText={t('whyUs.viewMore')}
        xmove={"100%"}
        number={1}
      />
      <Why
        image={whyus02}
        title={t('whyUs.frames.title')}
        paragraph={t('whyUs.frames.description')}
        link={"products"}
        linkText={t('whyUs.viewMore')}
        flexRowReverse={"row-reverse"}
        xmove={"-100%"}
        number={2}
      />
      <Why
        image={whyus03}
        title={t('whyUs.lamps.title')}
        paragraph={t('whyUs.lamps.description')}
        link={"products"}
        linkText={t('whyUs.viewMore')}
        xmove={"100%"}
        number={3}
      />
    </section>
  );
};

export default MyComponent;
