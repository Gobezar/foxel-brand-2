import { Accordion, AccordionItem } from "@heroui/react";
import Image from "next/image";
import manImg from "../../../../public/frequentQuestionsMan.webp";
import { Icon } from "@iconify/react";

const accordionItems = [
  {
    id: 1,
    title: "Как быстро я получу свой заказ?",
    description:
      "Если выбрана экспресс-доставка, то заказ может прийти в течение 1–3 дней. При почтовой доставке время ожидания может быть более длительным: до 30 дней для национальной и до 60 дней для международной. ",
  },
  {
    id: 2,
    title: "Есть ли возможность отследить мой заказ?",
    description: "123",
  },
  { id: 3, title: "Могу ли я отменить свой заказ?", description: "123" },
  { id: 4, title: "Как мне выбрать правильный размер?", description: "123" },
  { id: 5, title: "Смогу ли я вернуть заказ?", description: "123" },
  { id: 6, title: "Есть ли скидки для клиентов?", description: "123" },
];

export default function QuestionsAccordion() {
  return (
    <div className="flex">
      <div className="w-[30%] ">
        <Image src={manImg} alt="man" className="w-full " />
      </div>
      <Accordion className="w-[70%] pl-[38px]" showDivider={false}>
        {accordionItems.map((item, index) => {
          return (
            <AccordionItem
              key={item.id}
              aria-label={item.title}
              title={item.title}
              className={
                index !== accordionItems.length - 1
                  ? "border-b border-white"
                  : ""
              }
              classNames={{
                title: "text-500 text-4xl",
                content: "text-400 text-lg mb-[56px] px-[16px]",
                trigger: "py-[41px] px-[16px]",
              }}
              indicator={
                <Icon
                  icon="solar:round-arrow-left-line-duotone"
                  className="w-[53px] h-[53px] text-white"
                />
              }
            >
              {item.description}
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
