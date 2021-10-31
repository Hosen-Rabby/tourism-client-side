import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../Hooks/useAuth';



const Shipping = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {user} = useAuth();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <h2>Please your shipping info.</h2>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={user.displayName} {...register("name")} />
                    <input defaultValue={user.email} {...register("email")} />
                    <input placeholder = 'House and Street' {...register("address", { required: true })} />
                    <input placeholder = "City" {...register("city")} />
                    <input placeholder = "Zip Code" {...register("zip", { required: true })} />
                    <input placeholder = 'Phone' {...register("phone", { required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Shipping;