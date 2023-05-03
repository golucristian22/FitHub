import React from "react";
import "./subscribe-form-component.scss";
import Input from "../../atoms/input/input-component";
import Button from "../../atoms/button/button-component";

interface subscribeFormPropertiesInterface {
  title: string;
  description: string;
}

function SubscribeForm(props: subscribeFormPropertiesInterface) {
  return (
    <section>
      <form className="subscribe-form" action="POST">
        <h4 className="subscribe-form__title">{props.title}</h4>
        <p className="subscribe-form__description h6">{props.description}</p>
        <div className="subscribe-form__input">
          <Input placeholder="Enter your email..." />
          <Button text={<h6>Subscribe to Newsletter</h6>} variant="secondary" />
        </div>
      </form>
    </section>
  );
}

export default SubscribeForm;
