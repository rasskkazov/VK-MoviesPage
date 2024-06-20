import { useAdaptivityConditionalRender } from "@vkontakte/vkui";
import { ModalPage, ModalPageHeader, PanelHeaderClose } from "@vkontakte/vkui";

import { MovieListFilter } from "@/widgets";

const FILTERS_ID = "filters";

export const MovieListFilterModal = (modalBack: VoidFunction) => {
  const { sizeX } = useAdaptivityConditionalRender();

  const filters = (
    <ModalPage
      id={FILTERS_ID}
      onClose={modalBack}
      height={900}
      header={
        <ModalPageHeader
          before={
            sizeX.compact && (
              <PanelHeaderClose
                className={sizeX.compact.className}
                onClick={modalBack}
              />
            )
          }
        >
          Фильтры
        </ModalPageHeader>
      }
    >
      <MovieListFilter modalBack={modalBack} />
    </ModalPage>
  );

  return { filters, FILTERS_ID };
};
