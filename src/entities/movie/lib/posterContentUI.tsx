import { Title } from "@vkontakte/vkui";
import { TMovie } from "../types/type";

export const posterContentUI = (
  props: TMovie,
  {
    imgClassName,
    altDivClassname,
  }: { imgClassName: string; altDivClassname: string }
) => {
  if (props.poster && props.poster.previewUrl) {
    return (
      <img
        className={imgClassName}
        src={props.poster.previewUrl}
        alt={props.name}
      />
    );
  }

  return (
    <div className={altDivClassname}>
      <Title level="3">{props.name || props.alternativeName}</Title>
    </div>
  );
};
