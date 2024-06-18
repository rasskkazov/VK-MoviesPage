import { ModalRoot, SplitCol, SplitLayout } from "@vkontakte/vkui";
import { SubnavMob } from "./SubNavMob";

import { MovieList, MovieListFilter, MovieListFilterModal } from "@/widgets";
import { useModal } from "@/shared/lib/useModal";
import * as classes from "./Movies.module.scss";

export const Movies = () => {
  const { activeModal, setActiveModal, modalBack } = useModal();

  const { filters, FILTERS_ID } = MovieListFilterModal(modalBack);

  const modal = <ModalRoot activeModal={activeModal}>{filters}</ModalRoot>;

  return (
    <div className={classes.movies}>
      <SplitLayout center modal={modal}>
        <SplitCol maxWidth="24rem" className={classes.movies__sidebar}>
          <MovieListFilter />
        </SplitCol>
        <SplitCol maxWidth="140rem">
          <SubnavMob modalId={FILTERS_ID} setActiveModal={setActiveModal} />
          <MovieList />
        </SplitCol>
      </SplitLayout>
    </div>
  );
};
