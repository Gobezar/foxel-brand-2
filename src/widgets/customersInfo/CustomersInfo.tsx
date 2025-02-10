import React from "react";
import cl from "./CustomersInfo.module.scss";
import Image from "next/image";
import phoneImg from "../../../public/phone.webp";
import boxImg from "../../../public/box.webp";
import dashedArrow from "../../../public/dashedArrow.webp";

const customersInfoHeader = "Покупателям";

export const CustomersInfo = () => {
  return (
    <div className={cl.container}>
      <div className={cl.headerWrapper}>
        <h2>{customersInfoHeader.toUpperCase()}</h2>
      </div>
      <div className={cl.guarantee} style={{ marginBottom: 89 }}>
        <div className={cl.textBlock}>
          <h3>Гарантия</h3>
          <p style={{ marginBottom: 40 }}>
            Предоставляем возможность возврата товара в течение 14-30 дней с
            момента получения. Важно, чтобы товар был в оригинальной упаковке и
            с ярлыками.
          </p>
          <p>
            Это даст возможность перезаказть товар в случае неправильного
            определения размера.
          </p>
        </div>
        <div className={cl.imageBlock}>
          <div className={cl.imageBg}>
            <Image src={phoneImg} alt="phone" />
          </div>
          <Image
            src={dashedArrow}
            alt="dashedArrow"
            className={cl.dashedArrowSafety}
          />
        </div>
      </div>
      <div className={cl.safety}>
        <div className={cl.imageBlock}>
          <div className={cl.imageBg}>
            <Image src={boxImg} alt="box" />
          </div>
          <Image
            src={dashedArrow}
            alt="dashedArrow"
            className={cl.dashedArrowGuarantee}
          />
        </div>
        <div className={cl.textBlock} style={{ textAlign: "end" }}>
          <h3>Надежность</h3>
          <p style={{ marginBottom: 40 }}>
            Вы можете отслеживать вашу посылку, поэтому вы будете осведомлены о
            местонахождении вашего заказа на протяжении всего срока доставки.
          </p>
          <p>
            Помимо этого, мы следим за качеством нашего товара, поэтому каждая
            вещь приходит в нашей фирменной упаковке.
          </p>
        </div>
      </div>
    </div>
  );
};
