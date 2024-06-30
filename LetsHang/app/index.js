import { GestureHandlerRootView } from "react-native-gesture-handler";
import EventDetails from "./screens/EventDetails/index";

export default function Index() {
  return (
    <GestureHandlerRootView>
      <EventDetails />
    </GestureHandlerRootView>
  );
}
