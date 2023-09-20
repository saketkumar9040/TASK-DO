import { Provider } from "react-redux";
import AuthNavigator from "./src/navigations/AuthNavigator";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <AuthNavigator />
    </Provider>
  );
}
