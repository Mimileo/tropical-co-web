"use client"
import { useForm, SubmitHandler } from "react-hook-form"


type ContactFormInputs = {
  email: string
  mail: string
}


export default function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactFormInputs>()
  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => console.log(data)


  console.log(watch("email")) // watch input value by passing the name of it


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}  className="w-full max-w-lg m-auto py-10 mt-10 px-10 border">
      {/* register your input into the hook by invoking the "register" function */}
        <label className="text-gray-600 font-medium">Email</label>

      <input  className="border-solid border-gray-300 border py-2 px-4 w-full
    rounded text-gray-700"  placeholder="email" {...register("email")} />


      {/* include validation with required or other standard HTML validation rules */}
    

       <label className="text-gray-600 font-medium block mt-4">Message</label>
        <textarea className="border-solid border-gray-300 border py-20 px-4 w-full
        rounded text-gray-700" rows={5} cols={5} {...register("mail", {
        required: "Please send your message" })} /> {errors.mail && (
        <div className="mb-3 text-normal text-red-500 ">
          {errors.mail.message}
        </div>
        )}


      <input        className="mt-6 inline-block px-4 py-2 bg-green-700 text-white rounded-md transition duration-300 hover:bg-green-600"
type="submit" />
    </form>
  )
}

