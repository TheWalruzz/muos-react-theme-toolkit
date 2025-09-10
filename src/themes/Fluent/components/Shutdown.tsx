import { useTranslation } from "react-i18next";
import { SingleItemScreen } from "./SingleItemScreen";

export function Shutdown() {
  const { t } = useTranslation();

  return <SingleItemScreen text={t("shuttingDown", "Shutting Down")} />;
}
