import { router } from "expo-router";

export const navigateTo = ({ screen }) => {
  router.navigate(screen);
};
