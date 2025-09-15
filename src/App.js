import { IonApp, IonContent, IonHeader, IonInput, IonItem, IonTitle, IonToolbar, IonList, IonLabel} from '@ionic/react';
import { useState } from 'react';
import BioryhthmCard from './components/BiorhythmCard';
import { useStoredState } from './lib/hooks';


function getToday() {
  return new Date().toISOString().slice(0, 'yyyy-mm-dd'.length);
}

function App() {
  const [dateOfBirth, setDateOfBirth] = useStoredState('dateOfBirth','');
  const [targetDate, setTargetDate] = useState(getToday);

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color = "primary">
          <IonTitle>Biorhythm</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      {Boolean(dateOfBirth) && (      
        <BioryhthmCard birthDate = {dateOfBirth} targetDate = {targetDate} />
        )}
        <IonList>
          <IonItem>
            <IonLabel position = 'fixed'>
              Birth Date: 
            </IonLabel>
            <IonInput type = 'date'
            value = {dateOfBirth} onIonChange = {(event) => setDateOfBirth(event.detail.value)}
            />
          </IonItem>
          <IonItem>
            <IonLabel position = 'fixed'>
              Target Date:  
            </IonLabel>
            <IonInput type = 'date'
            value = {targetDate} onIonChange = {(event) => setTargetDate(event.detail.value)}
            />
          </IonItem>
        </IonList>
      </IonContent>
    </IonApp>
  );
}

export default App;
