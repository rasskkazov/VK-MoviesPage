import { useAdaptivityConditionalRender } from "@vkontakte/vkui";
import { MovieListFilter } from "@/widgets";
import { ModalPage, ModalPageHeader, PanelHeaderClose } from "@vkontakte/vkui";

const FILTERS_ID = "filters";

export const MovieListFilterModal = (modalBack: VoidFunction) => {
  const { sizeX } = useAdaptivityConditionalRender();

  const filters = (
    <ModalPage
      id={FILTERS_ID}
      onClose={modalBack}
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
      <MovieListFilter />
    </ModalPage>
  );

  return { filters, FILTERS_ID };
};
