"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type InputsType = {
  firstName: string;
  lastName: string;
  line1: string;
  line2: string;
  city: string;
  state: string;
  country: string;
  zip: string;
  phone: string;
};

function OrderAddress() {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<InputsType> = (data) => {
    console.log({ data });
  };

  console.log("watch : ", watch("firstName"));
  

  return (
    <div className="orderaddress__wrapper">
      <h5>Shipping address</h5>
      <div className="address-section">
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="input-group names">
            <div className="input-wrap"> 
            <label className={`${watch("firstName") && 'hasValue'}`}>First Name</label>
            <input
              defaultValue=""
              {...register("firstName")}
            />
            </div>
            <div className="input-wrap"> 
            <label className={`${watch("lastName") && 'hasValue'}`}>Last Name</label>
            <input
              defaultValue=""
              {...register("lastName")}
            />
            </div>
          </div>

          <div className="input-group line1">
            <div className="input-wrap"> 
            <label className={`${watch("line1") && 'hasValue'}`}>Address Line1</label>
            <input
              defaultValue=""
              {...register("line1")}
            />
            </div>
          </div>

          <div className="input-group line2">
            <div className="input-wrap"> 
            <label className={`${watch("line2") && 'hasValue'}`}>Address Line2</label>
            <input
              defaultValue=""
              {...register("line2")}
            />
            </div>
          </div>

          <div className="input-group place">
            <div className="input-wrap"> 
            <label className={`${watch("city") && 'hasValue'}`}>City</label>
            <input
              defaultValue=""
              {...register("city")}
            />
            </div>
            <div className="input-wrap"> 
            <label className={`${watch("state") && 'hasValue'}`}>State</label>
            <input
              defaultValue=""
              {...register("state")}
            />
            </div>
          </div>

          <div className="input-group country">
            <div className="input-wrap"> 
            <label className={`${watch("country") && 'hasValue'}`}>Country</label>
            <input
              {...register("country")}
            />
            </div>
            <div className="input-wrap"> 
            <label className={`${watch("zip") && 'hasValue'}`}>Zip code</label>
            <input
              defaultValue=""
              {...register("zip")}
            />
            </div>
          </div>

          <div className="input-group phone">
            <div className="input-wrap"> 
            <label className={`${watch("phone") && 'hasValue'}`}>Phone</label>
            <input
              defaultValue=""
              {...register("phone")}
            />
            </div>
          </div>


        </form>
      </div>
    </div>
  );
}

export default OrderAddress;
