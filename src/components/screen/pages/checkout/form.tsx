import { useForm, SubmitHandler } from "react-hook-form";

type FormInputs = {
  firstName: string;
  lastName: string;
  companyName: string;
  address: string;
  townCity: string;
  country: string;
  postCode: string;
  emailAddress: string;
};

export default function CheckoutForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* input Name */}
      <div className="form__name">
        <div className="form__item">
          <label htmlFor="firstName">
            First Name*:
            {errors.firstName?.type === "required" && (
              <span>Required field</span>
            )}
          </label>
          <input
            type="text"
            id="firstName"
            {...register("firstName", { required: true })}
            className={`${errors.firstName && "border__red"}`}
          />
        </div>

        <div className="form__item">
          <label htmlFor="lastName">
            Last Name*:
            {errors.lastName?.type === "required" && (
              <span>Required field</span>
            )}
          </label>
          <input
            type="text"
            id="lastName"
            {...register("lastName", { required: true })}
            className={`${errors.lastName && "border__red"}`}
          />
        </div>
      </div>

      {/* input Company Name */}
      <div className="form__item">
        <label htmlFor="companyName">
          Company Name*:
          {errors.companyName?.type === "required" && (
            <span>Required field</span>
          )}
        </label>
        <input
          type="text"
          id="companyName"
          {...register("companyName", { required: true })}
          className={`${errors.companyName && "border__red"}`}
        />
      </div>

      {/* input Address */}
      <div className="form__item">
        <label htmlFor="address">
          Address*:
          {errors.address?.type === "required" && <span>Required field</span>}
        </label>
        <input
          type="text"
          id="address"
          placeholder="House Number, Street Name"
          {...register("address", { required: true })}
          className={`${errors.address && "border__red"}`}
        />
      </div>

      {/* input Town City */}
      <div className="form__item">
        <label htmlFor="townCity">
          Town/City*:
          {errors.townCity?.type === "required" && <span>Required field</span>}
        </label>
        <input
          type="text"
          id="townCity"
          {...register("townCity", { required: true })}
          className={`${errors.townCity && "border__red"}`}
        />
      </div>

      {/* input Country */}
      <div className="form__item">
        <label htmlFor="country">
          Country*:
          {errors.country?.type === "required" && <span>Required field</span>}
        </label>
        <input
          type="text"
          id="country"
          {...register("country", { required: true })}
          className={`${errors.country && "border__red"}`}
        />
      </div>

      {/* input Post Code */}
      <div className="form__item">
        <label htmlFor="postCode">
          Postcode/Zip*:
          {errors.postCode?.type === "required" && <span>Required field</span>}
        </label>
        <input
          type="text"
          id="postCode"
          {...register("postCode", { required: true })}
          className={`${errors.postCode && "border__red"}`}
        />
      </div>

      {/* input Email Address */}
      <div className="form__item">
        <label htmlFor="emailAddress">
          Email Address*:
          {errors.emailAddress?.type === "required" && (
            <span>Required field</span>
          )}
        </label>
        <input
          type="email"
          id="emailAddress"
          {...register("emailAddress", { required: true })}
          className={`${errors.emailAddress && "border__red"}`}
        />
      </div>

      {/* input Create Aaccount */}
      <div className="form__item">
        <p>
          <input type="checkbox" id="createAccount" />
          <label htmlFor="createAccount">Create an account?</label>
        </p>
      </div>

      {/* input Create Aaccount */}
      <div className="form__item">
        <p>
          <input type="checkbox" id="shipAddress" />
          <label htmlFor="shipAddress">Ship to a different address?</label>
        </p>
      </div>

      {/* input Oreder Note */}
      <div className="form__item">
        <textarea placeholder="Oreder Notes (Optional)" cols={34} rows={8} />
      </div>

      <button className="checkout__submit" type="submit">
        Place Order
      </button>
    </form>
  );
}
