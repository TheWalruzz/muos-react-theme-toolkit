import { Power } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SingleItemScreen } from "./SingleItemScreen";

export function Shutdown() {
  const { t } = useTranslation();

  return (
    <SingleItemScreen
      icon={<Power size="50%" />}
      text={t("shuttingDown", "Shutting Down...")}
    />
  );
}
