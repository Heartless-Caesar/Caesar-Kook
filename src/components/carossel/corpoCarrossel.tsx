import React, { useContext } from "react";
import { ContextProvider } from "./carrossel";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const CorpoCarrossel: React.FC = () => {
  const { vetorDeElementos, index, setIndex }: any = useContext(
    ContextProvider
  );
  return (
    <div className="content-div">
      {vetorDeElementos.map((item: any, itemIndex: number) => {
        const { id, nome, imagem } = item;

        let slideClass = "nextSlide";

        if (itemIndex === index) {
          slideClass = "currentSlide";
        }

        //Can potentially break the carroussel uncomment with caution
        if (
          itemIndex === index - 1 ||
          (index === 0 && itemIndex === vetorDeElementos.length - 1)
        ) {
          slideClass = "prevSlide";
        }
        return (
          <article key={id} className={slideClass}>
            <img src={imagem} alt="image_de_receita" className="image" />
            <p className="text-div">
              <h2>{nome}</h2>
            </p>
          </article>
        );
      })}
      <button
        type="button"
        className="prev arrow left-arrow"
        onClick={() => setIndex(index - 1)}
      >
        <BsChevronLeft size={50} />
      </button>
      <button
        type="button"
        className="next arrow right-arrow"
        onClick={() => setIndex(index + 1)}
      >
        <BsChevronRight size={50} />
      </button>
    </div>
  );
};

export default CorpoCarrossel;