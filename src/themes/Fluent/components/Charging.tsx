import { SingleItemScreen } from "./SingleItemScreen";
import { useTranslation } from "react-i18next";

export function Charging() {
  const { t } = useTranslation();

  return (
    <SingleItemScreen text={t("charging", "Charging...")} centered={false} />
  );
}
