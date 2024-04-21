import { useEffect } from 'react';

const GoogleAnalyticsTrackingID = 'G-RH8MJDP7YL'; // Replace with your actual tracking ID

export default function Index() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GoogleAnalyticsTrackingID}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', GoogleAnalyticsTrackingID);
  }, []);