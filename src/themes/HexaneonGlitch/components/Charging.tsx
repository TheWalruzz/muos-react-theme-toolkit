import { Zap } from "lucide-react";
import { SingleItemScreen } from "./SingleItemScreen";
import { useTranslation } from "react-i18next";

export function Charging() {
  const { t } = useTranslation();

  return (
    <SingleItemScreen
      icon={<Zap size="50%" />}
      text={t("charging", "Charging...")}
      centered={false}
      chromaticAberration
    />
  );
}
