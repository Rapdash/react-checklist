import { configureStore } from "./redux/store";
import { IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import React from "react";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";

const store = configureStore();

export const App = () => {
  return (
    <Provider store={store}>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <IonRouterOutlet>
            <Route path="/checklists" component={Checklists} />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </Provider>
  );
};
