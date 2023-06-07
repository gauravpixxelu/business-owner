import React, { useEffect } from 'react';

const ExitPopup = () => {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      // Show a confirmation message to the user
      event.returnValue = ''; // Required for some browsers to show the confirmation message
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
<div class="exit-op">
<div class="gd-box">
    <h2>Free For Life</h2>
    <ul>
        <li>Everything you need to start with.</li>
        <li>Access to exclusive diagnostic platform.</li>
        <li>Unlimited report generation.</li>
        <li>No credit card no payments, ever!</li>
        <li>Includes online training.</li>
    </ul>
    <b>Upgrade anytime!</b>
    <p>Proof of concept. Use unlimited report generation. Only limited to 10 customers at any one time and no access to customer development modules</p>
    <a href="https://red-project.com/pages/sign-up?user_type=Consultant&subscricriptionPlan=3679d024-f6be-11ec-895e-068428e27ad2" class="custom-btn"><span>Sign Up</span></a>
    <button class="close">✕</button>
</div>
</div>
  );
};

export default ExitPopup;