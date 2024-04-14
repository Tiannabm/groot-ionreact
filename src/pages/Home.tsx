import { IonButton, IonCard, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { shield, planet, rocket, mail } from 'ionicons/icons';


const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary" >
          <IonTitle>Portfolio</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        <IonGrid>
          <IonRow>
            <IonCol size="4">
             <IonCard>
                  <img alt="" src="https://duet-cdn.vox-cdn.com/thumbor/0x0:1200x696/1200x800/filters:focal(631x178:632x179):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/8378039/baby-groot-guardians.0.jpg" />
              </IonCard>
            </IonCol>

            <IonCol size="8">
              <div>
                <h1 className="ion-text-uppercase"> <strong>Groot</strong> </h1>
                <p>I am Groot.</p>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>

        <div className="ion-margin-start"> 
        <h2>About Me</h2>
        <p>I am Groot. I. am. Groot. Groot. I am Groot. I am Groot. I. am. Groot. Groot. I am Groot. I am Groot. I. am. Groot. Groot. I am Groot. I am Groot. I. am. Groot. Groot. I am Groot. I am Groot. I. am. Groot. Groot. I am Groot. </p>
        </div>

        <IonGrid className="ion-margin-start">
          <IonRow>
            <IonCol size-sm='12' size-md='6' size-lg='6' >
              <h2>Work Experience</h2>

              <IonItem href='#'>
                <IonIcon className="ion-margin-end" icon={ rocket } color="dark" ></IonIcon>
                <IonLabel>  CEO, I Am Groot Enterprises, Inc.</IonLabel>
              </IonItem>
              <IonItem href='#'>
                <IonIcon className="ion-margin-end" icon={ planet } color="dark" ></IonIcon>
                <IonLabel>  Guardian, Of the Galaxy</IonLabel>
              </IonItem>
              <IonItem href='#'>
                <IonIcon className="ion-margin-end" icon={ shield } color="dark" ></IonIcon>
                <IonLabel>  Hero, Avengers</IonLabel>
              </IonItem>
            </IonCol>
           
            <IonCol size-sm='12' size-md='6' size-lg='6' >
              <h2>Technology Experience</h2>

              <IonItem href='#'>
                <IonLabel>I</IonLabel>
              </IonItem>
              <IonItem href='#'>
                <IonLabel>AM</IonLabel>
              </IonItem>
              <IonItem href='#'>
                <IonLabel>GROOT</IonLabel>
              </IonItem>
              <IonItem href='#'>
                <IonLabel>i am groot</IonLabel>
              </IonItem>
              <IonItem href='#'>
                <IonLabel>I AM GROOOOOOT</IonLabel>
              </IonItem>

            </IonCol>
          </IonRow>
        </IonGrid>

      <IonFooter collapse="fade">
        <IonButton expand="full" color="secondary"> iamgroot@iam.groot </IonButton>
      </IonFooter>

      </IonContent>
    </IonPage>
  );
};

export default Home;
