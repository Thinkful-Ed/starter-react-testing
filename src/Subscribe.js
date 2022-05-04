import React, { useState } from "react";

//Avoid asynchronous operations in interactive component:
function Subscribe() {
  const [subscribed, setSubscribed] = useState(false);
  const [subscribedCount, setSubscribedCount] = useState(0);
  const [alerts, setAlerts] = useState(false);

  return (
    <section>
      <p>Please click to subscribe to my updates!</p>
      <p>Subscriber Count: {subscribedCount}</p>
      <button
        onClick={() => {
          setSubscribed(!subscribed);
          setSubscribedCount((currentCount) => currentCount + 1);
          setSubscribedCount(function (currentCount) {
            return currentCount + 1;
          });
          if (!alerts) setAlerts(true);
        }}
      >
        {subscribed ? "Unsubscribe" : "Subscribe"}
      </button>
      <button
        onClick={() => {
          setAlerts(!alerts);
        }}
      >
        {alerts ? "Stop Email Alerts" : "Get Email Alerts"}
      </button>
    </section>
  );
}

//Basic interactive component;
//Create a button that change the state of the element and display different outputs.
function Subscribe2() {
  // const a =  useState(false);
  // const [subscribed, setSubscribed] = a;

  const [subscribed, setSubscribed] = useState(false);
  /* 
  useState function take the initial value, false, returns an array
  whose first value is the variable subscribed, and the second value is a function, setSubscribed
  */

  //how to see state change without installing

  // useEffect(() => {
  //   console.log(subscribed, "- Has changed");
  // }, [subscribed]);

  // const handleClick = (evt) => {
  //   console.log("Subscribing!");
  //   console.log(evt.target);
  //   //alert("You subscribed!");
  // };
  console.log("Subscribed status:", subscribed);
  return (
    <section>
      <p>Please click to subscribe to my updates!</p>
      <button onClick={() => setSubscribed(!subscribed)}>
        {subscribed ? "Unsubscribe" : "Subscribe"}
      </button>
    </section>
  );
}

export default Subscribe;
