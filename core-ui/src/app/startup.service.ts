import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StartupService {
  constructor() {}

  loadMicroFrontends = (list: string[]) => {
    list.forEach((mf) => {
      let mfDetails = (environment.microFrontends as any)[mf];
      if (!mfDetails) {
        console.log(mf + ' : Details not found... Skipping');
        return;
      }

      //Generate the Base URL of the MF
      let baseUrl = '';
      if (!environment.production && mfDetails.localPort) {
        //Unsing Local MF
        baseUrl = `http://localhost:${mfDetails.localPort}/${mfDetails.name}`;
      } else {
        //Using MF from online
        baseUrl = `${mfDetails.mfUrl}/${mfDetails.name}`;
      }

      // Only add script if previously not added
      if (!document.getElementById(`${mf}_js`)) {
        const script = document.createElement('script');
        script.setAttribute('src', `${baseUrl}/main.js`);
        script.setAttribute('id', `${mf}_js`);
        script.onload = () => {
          console.log(`${mf} loaded`);
        };
        document.body.appendChild(script);
      }

      // Only add style if previously not added and includeStyle is true
      if (mfDetails.includeStyle && !document.getElementById(`${mf}_css`)) {
        const link = document.createElement('link');
        link.setAttribute('href', `${baseUrl}/styles.css`);
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('id', `${mf}_css`);
        document.head.appendChild(link);
      }
    });
  };
}
