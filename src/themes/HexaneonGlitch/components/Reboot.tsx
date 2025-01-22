import { RotateCw } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SingleItemScreen } from "./SingleItemScreen";

export function Reboot() {
  const { t } = useTranslation();

  return (
    <SingleItemScreen
      icon={<RotateCw size="50%" />}
      text={t("rebooting", "Rebooting...")}
      chromaticAberration
    />
  );
}
