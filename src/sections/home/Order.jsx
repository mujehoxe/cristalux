import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Order = () =e {
  const { t } = useTranslation();
  return (
    <section className="overflow-hidden w-[100%] order">
      <div className="w-full h-[200px] md:h-[300px] flex items-center justify-center">
        <div className="text-center">
          <h2 className="py-5 text-2xl capitalize text-cristalux">
            {t('order.title')}
          </h2>
          <Link
            className="text-xl border-2 border-cristalux px-6 py-2 text-cristalux"
            to={"products"}
          >
            {t('order.viewMore')}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Order