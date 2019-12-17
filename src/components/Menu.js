import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonToolbar } from "@ionic/react";
import React from "react";
import { useSelector } from "react-redux";

const Menu = () => {
  const isAuthenticated = useSelector(state => state.auth["isAuthenticated"]);

  const renderLoggedInPages = () => (
    <>
      <IonMenuToggle>
        <IonItem button routerLink="/checklists" routerDirection="none">
          <IonIcon slot="start" name="list" />
          <IonLabel>Checklists</IonLabel>
        </IonItem>
      </IonMenuToggle>
    </>
  );

  return (
    <IonMenu>
      <IonHeader>
        <IonToolbar>Menu</IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonListHeader>Account</IonListHeader>
          {isAuthenticated ? renderLoggedInPages() : renderLoggedOutPages()}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};
