"use client";
import { IcreateOrderData, orderProductDetail } from "@/interface/orderService";
import { createOrderService } from "@/services/orderService";
import { clearCart, totalPriceSelector } from "@/store/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import LoaderLine from "../utils/Loader/LoaderLine";
import { useRouter } from "next/navigation";

const zodSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().optional(),
  line1: z.string().min(3),
  line2: z.string().optional(),
  city: z.string().min(2),
  state: z.string().min(2),
  country: z.string().min(2),
  zip: z.string().min(1).max(10),
  phone: z.string().regex(/^[0-9]{10}$/, {
    message: "must be 10 character with country code",
  }),
});

type FormFields = Zod.infer<typeof zodSchema>;

function OrderAddress() {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalPrice = useAppSelector(totalPriceSelector);

  const { data: session } = useSession();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const {
    register,
    watch,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      country: "India",
    },
    resolver: zodResolver(zodSchema),
  });

  const onSuccessOrder = async () => {    
    dispatch(clearCart())
    // navigate to payment section here
    // router.push()
  }

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      console.log({ data });
      // create data
      const orderProducts: orderProductDetail[] = [];
      cartItems.forEach((item) => {
        orderProducts.push({
          productId: item.product._id,
          quantity: item.quantity,
        });
      });
      const orderFormData: IcreateOrderData = {
        products: orderProducts,
        amount: totalPrice,
        address: data,
      };

      // call api
      const response = await createOrderService(
        orderFormData,
        session?.user?.accessToken || ""
      );
      console.log({response});
      
      if (response.error) {
        // add toast
        console.log("error create order : ", response.message);
        setError("root", { message: response?.message });
      } else {
        // toast success
        reset()
        await onSuccessOrder()
        console.log("SUCCESS create order : ", response);
      }
    } catch (err) {
      setError("root", { message: JSON.stringify(err) });
    }
  };

  return (
    <div className="orderaddress__wrapper">
      <h5>Shipping address</h5>
      <div className="address-section">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group names">
            <div className="input-wrap">
              <label className={`${watch("firstName") && "hasValue"}`}>
                First Name
              </label>
              <input
                className={`${errors.firstName && "error"}`}
                {...register("firstName")}
              />
              {errors.firstName && (
                <p className="error-txt">{errors.firstName.message}</p>
              )}
            </div>

            <div className="input-wrap">
              <label className={`${watch("lastName") && "hasValue"}`}>
                Last Name
              </label>
              <input
                className={`${errors.lastName && "error"}`}
                {...register("lastName")}
              />
              {errors.lastName && (
                <p className="error-txt">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div className="input-group line1">
            <div className="input-wrap">
              <label className={`${watch("line1") && "hasValue"}`}>
                Address Line1
              </label>
              <input
                className={`${errors.line1 && "error"}`}
                {...register("line1")}
              />
              {errors.line1 && (
                <p className="error-txt">{errors.line1.message}</p>
              )}
            </div>
          </div>

          <div className="input-group line2">
            <div className="input-wrap">
              <label className={`${watch("line2") && "hasValue"}`}>
                Address Line2
              </label>
              <input
                className={`${errors.line2 && "error"}`}
                {...register("line2")}
              />
              {errors.line2 && (
                <p className="error-txt">{errors.line2.message}</p>
              )}
            </div>
          </div>

          <div className="input-group place">
            <div className="input-wrap">
              <label className={`${watch("city") && "hasValue"}`}>City</label>
              <input
                className={`${errors.city && "error"}`}
                {...register("city")}
              />
              {errors.city && (
                <p className="error-txt">{errors.city.message}</p>
              )}
            </div>

            <div className="input-wrap">
              <label className={`${watch("state") && "hasValue"}`}>State</label>
              <input
                className={`${errors.state && "error"}`}
                {...register("state")}
              />
              {errors.state && (
                <p className="error-txt">{errors.state.message}</p>
              )}
            </div>
          </div>

          <div className="input-group country">
            <div className="input-wrap">
              <label className={`${watch("country") && "hasValue"}`}>
                Country
              </label>
              <input
                className={`${errors.country && "error"}`}
                {...register("country")}
              />
              {errors.country && (
                <p className="error-txt">{errors.country.message}</p>
              )}
            </div>

            <div className="input-wrap">
              <label className={`${watch("zip") && "hasValue"}`}>
                Zip code
              </label>
              <input
                className={`${errors.zip && "error"}`}
                {...register("zip")}
              />
              {errors.zip && <p className="error-txt">{errors.zip.message}</p>}
            </div>
          </div>

          <div className="input-group phone">
            <div className="input-wrap">
              <label className={`${watch("phone") && "hasValue"}`}>Phone</label>
              <input
                className={`${errors.phone && "error"}`}
                {...register("phone")}
              />
              {errors.phone && (
                <p className="error-txt">{errors.phone.message}</p>
              )}
            </div>
          </div>

          {isSubmitting ? (
            <LoaderLine
              text=""
              primaryColor="#808080"
              secondaryColor="#adaaaa"
            />
          ) : (
            cartItems.length > 0 && (
              <button disabled={isSubmitting} className="btn submit-btn">
                Proceed to Payment
              </button>
            )
          )}
        </form>
        {cartItems.length === 0 && (
          <button 
            className="btn shop-btn"
            onClick={()=> router.push(`/shop`)}>
            Continue Shopping
          </button>
        )}
      </div>
    </div>
  );
}

export default OrderAddress;
