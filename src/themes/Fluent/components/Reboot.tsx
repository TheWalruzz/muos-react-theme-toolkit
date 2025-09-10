import { useTranslation } from "react-i18next";
import { SingleItemScreen } from "./SingleItemScreen";

export function Reboot() {
  const { t } = useTranslation();

  return <SingleItemScreen text={t("rebooting", "Restarting")} />;
}
