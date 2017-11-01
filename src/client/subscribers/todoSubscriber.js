import Nes from 'nes/client';
import Axios from 'axios';

const socketPrefix = 'todos';

const notifyOfChanges = (message) => {
  const title = message ? message.title : 'All Todos Deleted!';
  const options = {
    body: message ? message.body : '',
    icon: message ? 
      'https://raw.githubusercontent.com/google/material-design-icons/master/places/2x_web/ic_ac_unit_black_36dp.png' :
      'https://raw.githubusercontent.com/google/material-design-icons/master/alert/2x_web/ic_add_alert_black_48dp.png',
  };

  // Let's check if the browser supports notifications
  if (!('Notification' in window)) {
    console.log('This browser does not support desktop notification');
  }
  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === 'granted') {
    // If it's okay let's create a notification
    const notification = new Notification(title, options);

    setTimeout(notification.close.bind(notification), 5000);
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission((permission) => {
      // If the user accepts, let's create a notification
      if (permission === 'granted') {
        const notification = new Notification(title, options);
        
        setTimeout(notification.close.bind(notification), 5000);
      }
    });
  }
};

export default function subscribeToTodos(callback) {
  const client = new Nes.Client('wss://localhost:3000');

  client.connect((error) => {
    const handler = (updates, flags) => {
      if (error) {
        console.error(error);
      }

      if (flags) {
        console.log(flags);
      }

      notifyOfChanges(updates[0]);
      callback(updates);
    };

    client.subscribe(`/${socketPrefix}`, handler, (err) => {
      if (err) {
        console.log(err);
      }
    });

    Axios.get(`/${socketPrefix}`)
      .then((response) => {
        callback(response.data);
      })
      .catch((getError) => {
        console.log(getError);
      });
  });
}
